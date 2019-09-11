import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  widget: {
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: '#d5fdd5',
    borderColor: '#A14550',
    borderRadius: 30,
    borderWidth: 2,
    marginLeft: 0,
    marginRight: 2,
    padding: 2,
    width: Dimensions.get('window').width * .85
  },
  icon: {
    width: 25,
    height: 80,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5
  },
  temp: {
    marginLeft: 20,
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 28,
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-evenly",
    marginBottom: 10
  },
  summary: {
    fontSize: 18,
  }
});