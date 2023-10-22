// import React from 'react';
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity, Text, Alert,Button } from 'react-native';


const Payment = ({ navigation }) => {
  const [name, setName] = useState('');
  const [card, setCard] = useState('');
  const [data, setDate] = useState('');
  const [cvv, setCvv] = useState('');


  const [isClicked, setIsClicked] = useState(false);
  const [isClickedc, setIsClickedc] = useState(false);

  const handlePay = () => {
    // You can implement the logic to place the order here
    // For simplicity, this example just shows an alert
    
    alert(`Your payment has received,thanks for shopping`);
    navigation.navigate('Home');
  };


  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.hotel}>
          <Image
            style={styles.tinyLogo}
            source={require('./image/img9.jpg')            }
          />
        </View>


         {/* <View style={styles.pay}>
          {/* <Text style={styles.lab}>Essentia Luxury Hotel Indore</Text>
          <Text style={styles.lab}>A Luxury Haven For Business And Leisure Travelers to India.</Text>
          <Text style={styles.lab}>📍- Khasra No. 473, 474 & 475, Ring Road Near World Cup Square, Piplyahana Square, Indore 452016 , India.</Text> */} 
 

          {/* dropdown for upi payment try */}
          <ScrollView>
            <TouchableOpacity style={styles.dropdown} onPress={() => setIsClicked(!isClicked)}>
              <Text style={styles.upititle}>G-Pay</Text>
              {isClicked ? (<Image
                style={styles.upimg}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmv7SGOGNSer_Xh70cU8OtjmnIKNDNFL3zP74WwpOb2FKy-ZTLrAFkooOZ0fDhbQmrsMs&usqp=CAU',
                }}
              />) : (
                <Image
                  style={styles.upimg}
                  source={{
                    uri: 'https://t3.ftcdn.net/jpg/04/83/39/12/360_F_483391217_rDo0Gdjp71zXabPRjeaE1O3I85R6nIgB.jpg',
                  }}
                />)}
            </TouchableOpacity>
            {/* ===================================dropdown area for pay=================================================================== */}


            {isClicked ? <View style={styles.upipayarea}>
              <Image
                style={styles.qr}
                source={require('./image/img9.jpg')}
              />
               <Button title="make payment" onPress={handlePay} />
            </View> : null}

            {/* ============================================card payment================================================ */}


            <TouchableOpacity style={styles.dropdown} onPress={() => setIsClickedc(!isClickedc)}>
              <Text style={styles.upititle}>Card Payment</Text>
              {isClickedc ? (<Image
                style={styles.upimg}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmv7SGOGNSer_Xh70cU8OtjmnIKNDNFL3zP74WwpOb2FKy-ZTLrAFkooOZ0fDhbQmrsMs&usqp=CAU',
                }}
              />) : (
                <Image
                  style={styles.upimg}
                  source={{
                    uri: 'https://t3.ftcdn.net/jpg/04/83/39/12/360_F_483391217_rDo0Gdjp71zXabPRjeaE1O3I85R6nIgB.jpg',
                  }}
                />)}
            </TouchableOpacity>
            {isClickedc ? <View style={styles.upipayarea}>
              <TextInput
                placeholder="Name"
                value={name}
                onChangeText={(text) => setName(text)}
                style={styles.input}
              />
              <TextInput
                placeholder="Card Number"
                value={card}
                onChangeText={(text) => setCard(text)}
                style={styles.input}
              />

              <TextInput
                placeholder="MM/YY"
                value={data}
                onChangeText={(text) => setDate(text)}
                style={styles.date}
              />


              <TextInput
                placeholder="Cvv"
                value={cvv}
                onChangeText={(text) => setCvv(text)}
                secureTextEntry
                style={styles.cvv}
              />
                <Button title="make payment" onPress={handlePay} />

              
          <Text style={styles.lab}>RuPay Cards</Text>
          <Text style={styles.lab}>VISA Cards</Text>
          <Text style={styles.lab}>Credit Card</Text>

            </View> : null}
          </ScrollView>
        {/* </View> */}

      </ScrollView>

    </View>
  )
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 300,
    height: 200,
    marginTop: 10,
    marginBottom: 25,
    marginLeft: 55,
    marginRight: 60,
    alignItems: 'center',
    borderRadius: 5,
  },
  lab: {
    marginRight: 10,
    marginLeft: 40,
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  dropdown: {
    width: "90%",
    marginLeft: 5,
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor: 'gray',
    height: 40,
    alignSelf: 'center',
    marginTop:20,

  },
  upititle: {
    width: "80%",
    height: 40,
    marginRight: 10,
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    borderColor: 'gray',
    paddingLeft: 10,
    // backgroundColor: 'blue',
    paddingTop: 8,
    borderRadius: 9,
  },
  upimg: {
    width: "7%",
    height: 30,
    marginLeft: 280,
    marginBottom: 10,
    marginTop: -50,
  },
  upipayarea: {
    width: "90%",
    height: 400,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 10,
    paddingTop: 30,
    // backgroundColor: 'red',
    alignSelf: 'center',
    marginBottom: 10,
    elevation: 5,
  },
  qr: {
    width: '94%',
    height: 300,
    alignSelf: 'center',

  },
  pay: {
    backgroundColor: 'white',
    paddingTop: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 7,
    height: 800,
    width: '85%',
    marginLeft: 27,
    marginBottom: 10,
  },

  input: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    alignSelf: 'center',

    marginBottom: 18,
    fontSize: 18,
  },
  cvv: {
    width: '38%',
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    marginLeft: 165,
    marginTop: -55,
    alignItems: 'center',
    fontSize: 18,
  },
  ord: {
    width: '43%',
    height: 45, // Adjust the height as needed
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 6,
    backgroundColor: 'blue',
  },
  date: {
    width: '38%',
    height: 45,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    marginLeft: 32,
    alignItems: 'center',
    fontSize: 18,
  },
  ordbtn: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 6,
    fontWeight: 'bold',
    fontSize: 23,
    color: 'white',
  },
  
});

export default Payment;

