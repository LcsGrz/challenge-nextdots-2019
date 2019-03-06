import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sombra: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  redondeado: {
    borderRadius: 4,
  },
  componente: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
  },
  contenedor: {
    width: '100%',
  },
  imagen: {
    height: 300,
    width: '100%',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 25,
    fontWeight: '500',
  },
  ingrediente: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 5,
  },
});

export default styles;
