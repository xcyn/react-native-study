import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

type Props = {};
export default class App extends Component<Props> {
  render() {
  return (
     <View style={styles.sectionContainer}>
         <Text style={styles.sectionTitle}>边寒爽和傻熊</Text>
        <Image
          style={{width: '100%', height: 300, marginTop: 20, marginBottom: 20}}
          source={{uri: 'https://graph.baidu.com/resource/121cfa2e5611e7c416d9301588656087.jpg'}}
        />
         <Text style={styles.sectionDescription}>大家好，我是傻边。</Text>
         <Text style={styles.sectionDescription}>我是一个小傻子，哈哈啊哈～</Text>
         <Text style={styles.sectionDescription}>我很幸运遇到我熊哥。</Text>
         <Text style={styles.sectionDescription}>我发誓我以后做饭洗碗好好做家务。</Text>
         <Text style={styles.sectionDescription}>做一个没心没肺的小傻子。</Text>
         <Text style={styles.sectionDescription}>对我熊哥服服帖帖的。</Text>
         <Text style={styles.sectionDescription}>啊哈哈哈----------------</Text>
     </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 50,
    paddingHorizontal: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});