import React from 'react';
import { StyleSheet, TextInput, Image, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Activity4 = () => {
  const [name, onChangeName] = React.useState('Name: ');
  const [age, onChangeAge] = React.useState('Age: ');
  const [address, onChangeAddress] = React.useState('Address: ');
  const [school, onChangeSchool] = React.useState('School: ');
  const [course, onChangeCourse] = React.useState('Course:');
  const [email, onChangeEmail] = React.useState('Email:');
  const [comment, onChangeComment] = React.useState('Contact:');
  const [aboutMe, onChangeAboutMe] = React.useState('About Me: ');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.content}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Name:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://static.vecteezy.com/system/resources/previews/024/755/884/non_2x/age-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAge}
            value={age}
            placeholder="Age:"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyxm2EucBQdvDo4mDCfvthIvinln0VZRdGA&s'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={address}
            placeholder="Address:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeSchool}
            value={school}
            placeholder="School:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZTZoKj3yL398xG0ObX_E2jlWQreq2sc8cg&s'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCourse}
            value={course}
            placeholder="Course:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://www.telegraph.co.uk/content/dam/technology/2015/12/11/gmail-envelope_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=680'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpC8majhdAabAXH8ZxmJcyyzcgKxYuEtO-ug&s'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeComment}
            value={comment}
            placeholder="Contact:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://lh3.googleusercontent.com/a/ACg8ocJ456fb3BC_8rdnLAFrc9ChQZqyXn0jZI-4OQL0z71GbFOpX7o=s288-c-no'}
          />
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text) => onChangeAboutMe(text)}
            placeholder="About Me: "
            value={aboutMe}
            style={styles.textInput}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    borderBottomColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 12,
    width: "100%",
  },
  row: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 20,
  },
  image: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});

export default Activity4;