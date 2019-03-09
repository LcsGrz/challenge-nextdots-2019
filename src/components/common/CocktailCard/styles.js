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
    height: 200,
    width: '100%',
    backgroundColor: 'white',
    marginBottom: 20,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contenedor: {
    height: '100%',
    width: '50%',
  },
  imagen: {
    height: '100%',
    width: '44%',
  },
  titulo: {
    fontSize: 25,
    fontWeight: '500',
  },
  ingrediente: {
    fontSize: 16,
    fontWeight: '400',
  },
});

export default styles;
