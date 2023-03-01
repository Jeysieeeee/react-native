import { ScrollView, View, Text, Image, StyleSheet, TexInput } from 'react-native';

const carList = [
  { name: 'Mazda MX-5', model: 'Sports Car', image: { uri: 'https://i.ytimg.com/vi/pAaAhqcOzlY/maxresdefault.jpg' } },
  { name: 'Toyota 4Runner', model: 'SUV', image: { uri: 'https://www.toyotadirect.com/blogs/3084/wp-content/uploads/2020/06/4Runner-White-Front-2018.jpg' } },
  { name: 'Toyota Vios 1.3 XE CVT', model: 'Sedan', image: { uri: 'https://images.summitmedia-digital.com/topgear/images/2021/01/07/2021-toyota-vios-02-1610017709.jpg' } },
  { name: 'BMW i8 Roadster', model: 'Convertible', image: { uri: 'https://imageio.forbes.com/blogs-images/nargessbanks/files/2018/08/3.BMW-i8-Rodster.jpg?format=jpg&width=960' } },
  { name: '2017 Chevrolet Callaway SS', model: 'Coupe', image: { uri: 'https://fastly-production.24c.in/hello-ar/dev/uploads/62a3235939c8f0ca781021c7/44fbd91f-099c-4415-8271-0e951a0ae14a/slot/camera-Front-Left.jpg?w=720&auto=format' } },
  { name: 'Philly First Class', model: 'Limousine', image: { uri: 'https://cdn0.weddingwire.com/vendor/972839/3_2/1280/jpg/limo-rentals4_51_1938279-163676558691308.webp' } },
  { name: 'Czinger 21C', model: 'Hyper', image: { uri: 'https://media.evo.co.uk/image/private/s--RPQQy1Rz--/f_auto,t_content-image-full-desktop@1/v1670952774/evo/2022/12/Best%20hypercars%202023-15.jpg' } },
  { name: 'Mahindra Scorpio Classic', model: 'Off-Roader', image: { uri: 'https://www.cars24.com/blog/wp-content/uploads/2023/01/Mahindra-Thar.jpg' } },
  { name: 'Nissan Navara', model: 'Pick-up', image: { uri: 'https://1.bp.blogspot.com/-PujtF2a4GnQ/XbpR28kdGwI/AAAAAAABBiw/h6nRnydKJa0MZNeGeKadmgu6m_QLAqwgACLcBGAsYHQ/s1600/2018_nissan_navara.jpg' } },
  { name: 'Toyota Wigo 2019', model: 'Hatchback', image: { uri: 'https://cdn-vz-info.ecomparemo.com/wordpress-media/2019/07/toyota-wigo.jpg' } },
];

const App = () => {
  return (
    <View style={styles.mainContainer}>
       <Text style ={styles.TextHeading}>LIST OF DIFFERENT CARS</Text>
       <ScrollView style={styles.container}>
      {carList.map((car, index) => (
        <View key={index} style={styles.carContainer}>
          <Image source={car.image} style={styles.carImage} />
          <View style={styles.carDetails}>
            <Text style={styles.carName}>{car.name}</Text>
            <Text style={styles.carModel}>{car.model}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  carContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  carImage: {
    width: 230,
    height: 150,
    marginRight: 10,
  },
  carDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  carModel: {
    fontSize: 16,
    color: '#777',
  },
  TextHeading: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 50,
  },
  mainContainer: {
    flex: 1,
    marginTop: 40,
    marginBottom:20,
  }
  
});

export default App;
