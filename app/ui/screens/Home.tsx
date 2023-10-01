import {
  Box,
  Button,
  Card,
  Center,
  Divider,
  HStack,
  Icon,
  IconButton,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {
  Alert,
  ImageBackground,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {Camera, CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import {StyleSheet} from 'react-native';

export const backgroundUrl =
  'E:/Escritorio/Eter/LearnAid/LearnAid mobile/LearnAidMobile/app/assets/background.png';

export const textLogoUrl =
  'E:/Escritorio/Eter/LearnAid/LearnAid mobile/LearnAidMobile/app/assets/learn-aid-text-logo.png';

export const cameraIconUrl =
  'E:/Escritorio/Eter/LearnAid/LearnAid mobile/LearnAidMobile/app/assets/cameraIcon.png';

export const settingsIconUrl =
  'E:/Escritorio/Eter/LearnAid/LearnAid mobile/LearnAidMobile/app/assets/settingsIcon.png';

export const addIconUrl =
  'E:/Escritorio/Eter/LearnAid/LearnAid mobile/LearnAidMobile/app/assets/addIcon.png';

export const forwardIconUrl =
  'E:/Escritorio/Eter/LearnAid/LearnAid mobile/LearnAidMobile/app/assets/forwardIcon.png';

export const backwardIconUrl =
  'E:/Escritorio/Eter/LearnAid/LearnAid mobile/LearnAidMobile/app/assets/backwardIcon.png';

export default function Home() {
  const [dataText, setDataText] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molasdasdasdasdasdestia blanditiis consectetur cum aut ipsum placeat labore quam, tempore praesentium perferendis excepturi facilis eligendi nemo officiis nisi fugit omnis debitis esse? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam amet autem sit eaque veniam quas delectus quis laudantium maxime doloremque perspiciatis quasi, suscipit eum, cum a voluptatibus ullam sapiente voluptates.',
  );
  const [tamañoTexto, setTamañoTexto] = useState(25);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  const [cameraOpen, setCameraOpen] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [play, setPlay] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();

    const getPermissions = async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    };
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log('DATA: ', data);
        setImage(data.uri);
      } catch (e) {
        console.log('Exception error: ', e);
      }
    }
  };

  /* if (hasCameraPermission === false) {
    return <Text>No tienes acceso a la cámara con esta aplicación</Text>;
  }*/

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* Imagen de fondo */}
        <ImageBackground
          source={require(backgroundUrl)}
          style={{
            width: '100%',
            height: '100%',
          }}
          alt="icon.png">
          <VStack
            style={{
              flex: 1,
              padding: 10,
              paddingLeft: '5%',
            }}
            space={5}>
            <ScrollView
              contentContainerStyle={{flexGrow: 1}}
              showsVerticalScrollIndicator={false}>
              <Card
                style={{
                  borderRadius: 0,
                  height: '100%',
                }}>
                <Text
                  fontSize={tamañoTexto + 'px'}
                  textAlign={'justify'}
                  bold
                  color={'black'}
                  style={{textShadowColor: 'black'}}
                  p={5}>
                  {dataText}
                </Text>
              </Card>
            </ScrollView>
            <HStack
              justifyContent={'center'}
              space={'10%'}
              height={'20%'}
              p={'5%'}
              paddingBottom={'10%'}>
              <Button
                width={'30%'}
                height={'100%'}
                style={{
                  bottom: '-15%',
                  right: '-2.5%',
                  backgroundColor: 'orange',
                }}
                onPress={() => {
                  setSettingsModalVisible(true);
                }}>
                <Center>
                  <Image
                    source={require(settingsIconUrl)}
                    style={{
                      width: '100%',
                      height: '65%',
                    }}
                    alt="icon.png"
                  />
                  <Text color={'black'}>Ajustes</Text>
                </Center>
              </Button>
              <Button
                width={'30%'}
                height={'100%'}
                style={{backgroundColor: 'lightblue'}}
                onPress={() => setCameraOpen(true)}>
                <Center>
                  <Image
                    source={require(cameraIconUrl)}
                    style={{
                      width: '100%',
                      height: '63%',
                    }}
                    alt="icon.png"
                  />
                  <Text color={'black'} fontSize={15}>
                    Cámara
                  </Text>
                </Center>
              </Button>
              <Button
                width={'30%'}
                height={'100%'}
                style={{
                  bottom: '-15%',
                  left: '-2.5%',
                  backgroundColor: 'orange',
                }}
                shadow={20}>
                <Center>
                  <Image
                    source={require(addIconUrl)}
                    style={{
                      width: '80%',
                      height: '60%',
                    }}
                    alt="icon.png"
                  />
                  <Text color={'black'} fontSize={'15px'}>
                    Agregar
                  </Text>
                </Center>
              </Button>
            </HStack>
            <HStack space={5}>
              <Button
                width={'30%'}
                height={'100%'}
                background={'white'}
                onPress={() => {
                  ('');
                }}>
                <Center>
                  <Text color={'black'} fontSize={17}>
                    Atrasar
                  </Text>
                </Center>
              </Button>
              <Button
                width={'30%'}
                height={'100%'}
                background={'black'}
                onPress={() => setPlay(!play)}>
                <Center>
                  <Text color={'white'} fontSize={17}>
                    {!play ? 'Reproducir' : 'Pausar'}
                  </Text>
                </Center>
              </Button>
              <Button
                width={'30%'}
                height={'100%'}
                background={'white'}
                onPress={() => {}}>
                <Center>
                  <Text color={'black'} fontSize={17}>
                    Adelantar
                  </Text>
                </Center>
              </Button>
            </HStack>
          </VStack>
        </ImageBackground>
      </View>
      {/*MODAL SETTINGS*/}
      <Modal visible={settingsModalVisible}>
        <View style={{flex: 1}}>
          <ImageBackground
            source={require(backgroundUrl)}
            style={{
              width: '100%',
              height: '100%',
            }}
            alt="icon.png">
            <VStack
              style={{
                flex: 1,
                padding: 10,
                paddingLeft: '5%',
              }}
              space={5}>
              <Box
                style={{
                  width: '100%',
                  height: '10%',
                }}>
                <ImageBackground
                  source={require(textLogoUrl)}
                  style={{width: '50%', height: '50%'}}
                  alt="icon.png"
                />
              </Box>
              <Button
                width={'30%'}
                size={10}
                background={'black'}
                onPress={() => {
                  setSettingsModalVisible(!settingsModalVisible);
                }}
                justifyContent={'center'}
                alignItems={'center'}>
                <Center>
                  <Text fontSize={'25px'} bold color={'white'}>
                    Cerrar
                  </Text>
                </Center>
              </Button>
              <Text fontSize={'25px'} textAlign={'center'} bold color={'black'}>
                Tamaño del texto
              </Text>
              <HStack>
                <Button
                  width={'30%'}
                  height={'100%'}
                  background={'black'}
                  onPress={() => {
                    tamañoTexto >= 25
                      ? setTamañoTexto(tamañoTexto - 1)
                      : Alert.alert('la letra no puede achicarse mas');
                  }}>
                  <Center>
                    <Text color={'white'} fontSize={19}>
                      Achicar
                    </Text>
                  </Center>
                </Button>
                <Box
                  style={{
                    width: '40%',
                    height: '100%',
                    backgroundColor: 'white',
                  }}>
                  <Text
                    fontSize={tamañoTexto + 'px'}
                    textAlign={'center'}
                    bold
                    color={'black'}>
                    A
                  </Text>
                </Box>
                <Button
                  width={'30%'}
                  height={'100%'}
                  background={'black'}
                  onPress={() => {
                    tamañoTexto <= 45
                      ? setTamañoTexto(tamañoTexto + 1)
                      : Alert.alert('la letra no puede aumentarse mas');
                  }}>
                  <Center>
                    <Text
                      color={'white'}
                      fontFamily={'notoserif'}
                      fontSize={19}>
                      Aumentar
                    </Text>
                  </Center>
                </Button>
              </HStack>
              <Text fontSize={'25px'} textAlign={'center'} bold color={'black'}>
                Velocidad de reproducción
              </Text>
              <HStack>
                <Button
                  width={'30%'}
                  height={'100%'}
                  background={'black'}
                  onPress={() => {
                    tamañoTexto >= 25
                      ? setTamañoTexto(tamañoTexto - 1)
                      : Alert.alert('la letra no puede achicarse mas');
                  }}>
                  <Center>
                    <Text color={'white'} fontSize={19}>
                      Achicar
                    </Text>
                  </Center>
                </Button>
                <Box
                  style={{
                    width: '40%',
                    height: '100%',
                    backgroundColor: 'white',
                  }}>
                  <Text
                    fontSize={tamañoTexto + 'px'}
                    textAlign={'center'}
                    bold
                    color={'black'}>
                    A
                  </Text>
                </Box>
                <Button
                  width={'30%'}
                  height={'100%'}
                  background={'black'}
                  onPress={() => {
                    tamañoTexto <= 45
                      ? setTamañoTexto(tamañoTexto + 1)
                      : Alert.alert('la letra no puede aumentarse mas');
                  }}>
                  <Center>
                    <Text
                      color={'white'}
                      fontFamily={'notoserif'}
                      fontSize={19}>
                      Aumentar
                    </Text>
                  </Center>
                </Button>
              </HStack>
            </VStack>
          </ImageBackground>
        </View>
      </Modal>
      {/*MODAL CAMARA*/}
      <Modal visible={cameraOpen}>
        <VStack style={{flex: 1}}>
          {!image ? (
            <Camera
              style={styles.camera}
              type={type}
              flashMode={flash}
              ref={cameraRef}></Camera>
          ) : (
            <Image
              source={{uri: image}}
              style={styles.camera}
              alt="image.jpg"
            />
          )}

          {image ? (
            <HStack height={'10%'}>
              <Button
                height={'100%'}
                width={'50%'}
                onPress={() => setImage(null)}
                style={{backgroundColor: 'red'}}>
                TOMAR DE NUEVO
              </Button>
              <Button
                height={'100%'}
                width={'50%'}
                onPress={() =>
                  /*ENVIAR IMAGEN AL BACK*/ setCameraOpen(!cameraOpen)
                }
                style={{backgroundColor: 'green'}}>
                CONSERVAR
              </Button>
            </HStack>
          ) : (
            <Button
              height={'10%'}
              width={'100%'}
              onPress={takePicture}
              backgroundColor={'black'}>
              !TOCA PARA CAPTURAR!
            </Button>
          )}
        </VStack>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: '#fff',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    borderRadius: 5,
  },
});