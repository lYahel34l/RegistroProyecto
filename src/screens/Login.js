import React from 'react';
import { Box, Button, Center, FormControl, Heading, HStack, Input, Link, Text, VStack, Pressable } from 'native-base';

const Login = ({ navigation }) => {
  const handleSignIn = () => {
    navigation.replace('Tabs'); // Navega a las pestañas al hacer clic en "Sign in"
  };

  return (
    <Center w="100%" flex={1} bg="white">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
          Welcome
        </Heading>
        <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link _text={{ fontSize: "xs", fontWeight: "500", color: "indigo.500" }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleSignIn}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
              I'm a new user.{" "}
            </Text>
            <Pressable onPress={() => navigation.navigate('Registro')}>
        <Text color="indigo.500" fontWeight="medium" fontSize="sm">
          Sign Up
        </Text>
      </Pressable>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
