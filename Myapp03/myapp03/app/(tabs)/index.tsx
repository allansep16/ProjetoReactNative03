import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function ProductCard() {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://i.zst.com.br/thumbs/12/2/14/-1211583034.jpg' }} 
        style={styles.productImage} 
      />
      <Text style={styles.productName}>Poco X6 Pro 5G</Text>
      <Text style={styles.productPrice}>R$ 2.199,00</Text>
      <Button title="Comprar" onPress={() => alert('Produto adicionado ao carrinho')} color="#ff5722" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    margin: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    color: '#ff5722',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

