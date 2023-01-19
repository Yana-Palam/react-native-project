import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Input from '../Components/Input';
import ButtonSubmit from '../Components/ButtonSubmit';
import { Formik } from 'formik';
import registrationValidationSchema from '../Schemas/registrationValidationSchema';

const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHidePassword, setIsHidePassword] = useState(true);

  const [dimensions, setDimension] = useState(Dimensions.get('window').width);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width;
      setDimension(width);
    };
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener?.('change', onChange);
    };
  }, []);

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => {
      keyboardHide();
    });
    return () => {
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, [keyboardHide]);

  const toggleShowPassword = () => {
    setIsHidePassword(prev => !prev);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('../assets/images/mountain.jpg')}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : ''}
          >
            <View style={styles.wrapper}>
              <View style={styles.userPhoto}>
                <TouchableOpacity
                  style={styles.btnAdd}
                  activeOpacity={0.7}
                  onPress={() => {
                    console.log('add photo');
                  }}
                >
                  <Image
                    source={require('../assets/images/Union.png')}
                    style={styles.addIcon}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.headerTitle}>Реєстрація</Text>
              <Formik
                validationSchema={registrationValidationSchema}
                initialValues={{ login: '', email: '', password: '' }}
                onSubmit={values => {
                  keyboardHide();
                  console.log(values);
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <View
                    style={{
                      ...styles.form,
                      paddingBottom: isShowKeyboard ? 32 : 78,
                      width: dimensions,
                    }}
                  >
                    <View
                      style={{
                        position: 'relative',
                      }}
                    >
                      <Input
                        name="login"
                        placeholder={'Логін'}
                        onFocus={() => setIsShowKeyboard(true)}
                        value={values.login}
                        onChangeText={handleChange('login')}
                      />
                      {touched.login && errors.login && (
                        <Text style={styles.errorText}>{errors.login}</Text>
                      )}
                    </View>
                    <View
                      style={{
                        position: 'relative',
                      }}
                    >
                      <Input
                        name="email"
                        placeholder="Адреса електронної пошти"
                        stylesProp={{ marginTop: 16 }}
                        onFocus={() => setIsShowKeyboard(true)}
                        value={values.email}
                        onChangeText={handleChange('email')}
                      />
                      {touched.email && errors.email && (
                        <Text style={styles.errorText}>{errors.email}</Text>
                      )}
                    </View>

                    <View
                      style={{
                        position: 'relative',
                      }}
                    >
                      <Input
                        name="password"
                        placeholder={'Пароль'}
                        stylesProp={{ marginTop: 16 }}
                        onFocus={() => setIsShowKeyboard(true)}
                        value={values.password}
                        onChangeText={handleChange('password')}
                        secureTextEntry={isHidePassword}
                      />

                      <TouchableOpacity
                        style={styles.btnShowPassword}
                        onPress={toggleShowPassword}
                        activeOpacity={0.7}
                      >
                        <Text style={styles.btnShowPasswordText}>
                          {isHidePassword ? 'Показати' : 'Приховати'}
                        </Text>
                      </TouchableOpacity>
                      {touched.password && errors.password && (
                        <Text style={styles.errorText}>{errors.password}</Text>
                      )}
                    </View>

                    {!isShowKeyboard && (
                      <View>
                        <ButtonSubmit
                          title={'Зареєструватися'}
                          onPress={handleSubmit}
                        />

                        <Text style={styles.linkText}>
                          Вже є акаунт? Увійти
                        </Text>
                      </View>
                    )}
                  </View>
                )}
              </Formik>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  wrapper: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    lineHeight: 35,
    color: '#212121',
    marginBottom: 25,
    textAlign: 'center',
  },
  form: {
    paddingHorizontal: 16,
  },
  userPhoto: {
    height: 120,
    width: 120,
    borderRadius: 16,
    position: 'absolute',
    top: -60,
    backgroundColor: '#F6F6F6',
  },
  btnAdd: {
    height: 25,
    width: 25,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FF6C00',
    position: 'absolute',
    bottom: 12,
    right: -12,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {},

  btnShowPassword: {
    position: 'absolute',
    right: 16,
    top: 30,
  },
  btnShowPasswordText: {
    fontSize: 16,
    color: '#1B4371',
    fontFamily: 'Roboto-Regular',
  },
  btn: {
    borderWidth: 1,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    width: '100%',
    height: 51,

    backgroundColor: '#FF6C00',
    border: 1,
    borderRadius: 100,
    marginBottom: 16,
  },
  btnTitle: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Roboto-Regular',
  },
  linkText: {
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',

    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  errorText: {
    fontSize: 10,
    color: 'red',
    position: 'absolute',
    bottom: -14,
    left: 8,
  },
});

export default RegistrationScreen;
