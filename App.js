
import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [petName, setPetName] = useState("");
  const [petBirthdate, setPetBirthdate] = useState("");
  const [breed, setBreed] = useState("");
  const [toy, setToy] = useState("");

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#ecf0f1" }}
    >
      <InputWithLabel
        label={"Email"}
        placeholder={"Enter email address"}
        value={email}
        // onChangeText={(text) => setEmail(text)}
        onChangeText={setEmail}

      />
      <InputWithLabel
        label={"Password"}
        placeholder={"Enter password"}
        value={password}
        // onChangeText={(password) => setPassword(password)}
        onChangeText={setPassword}
        // secureTextEntry={true}
        secureTextEntry
      />
      <InputWithLabel
        label={"Confirm Password"}
        placeholder={"Re-enter the password"}
        onSubmitEditing={(e) => {
          confirmPasswordsMatch(e.nativeEvent.text, password);
        }}
        // secureTextEntry={true}
        secureTextEntry
      />
      <InputWithLabel
        label={"Pet's name"}
        placeholder={"Enter pet's name"}
        value={petName}
        // onChangeText={(petName) => setPetName(petName)}
        onChangeText={setPetName}
      />
      <InputWithLabel
        label={"Pet's date of birth"}
        placeholder={"Enter pet's date of birth"}
        value={petBirthdate}
        // onChangeText={(petBirthdate) => setPetBirthdate(petBirthdate)}
        onChangeText={setPetBirthdate}
      />
      <InputWithLabel
        label={"Breed"}
        placeholder={"Enter breed"}
        value={breed}
        // onChangeText={(breed) => setBreed(breed)}
        onChangeText={setBreed}
      />
      <InputWithLabel
        label={"Favorite Toy"}
        placeholder={"Enter Favorite toy"}
        value={toy}
        // onChangeText={(toy) => setToy(toy)}
        onChangeText={setToy}
      />
    </ScrollView>
  );
};

export default App;

const InputWithLabel = (props) => (
  <View style={{padding: 16}} >
    <Text style={{padding: 8, fontSize: 18}}>{props.label}</Text>
    <TextInput
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      style={{ backgroundColor: 'lightgray', padding: 8}}
      // secureTextEntry={props.label === "Password" ? true : false}
      secureTextEntry={props.secureTextEntry}
      onSubmitEditing={props.onSubmitEditing}
    />
  </View>
);

// import React, { useState } from "react";
// import { View, Text, TextInput, ScrollView, Button } from "react-native";
// import { Formik } from "formik";

// const App = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [petName, setPetName] = useState("");
//   const [petBirthdate, setPetBirthdate] = useState("");
//   const [breed, setBreed] = useState("");
//   const [toy, setToy] = useState("");

//   return (
//     <Formik
//       initialValues={{
//         email: "",
//         password: "",
//         petName: "",
//         petBirthdate: "",
//         breed: "",
//         toy: "",
//       }}
//       onSubmit={(values) => console.log(values)}
//     >
//       {({ handleChange, handleSubmit, values }) => (
//         <ScrollView style={{ flex: 1, backgroundColor: "#ecf0f1" }}>
//           <InputWithLabel
//             label={"Email"}
//             placeholder={"Enter email address"}
//             value={values.email}
//             onChangeText={handleChange('email')}
//           />
//           <InputWithLabel
//             label={"Password"}
//             placeholder={"Enter password"}
//             value={values.password}
//             onChangeText={handleChange('password')}
//             secureTextEntry
//           />
//           <InputWithLabel
//             label={"Confirm Password"}
//             placeholder={"Re-enter the password"}
//             onSubmitEditing={(e) => {
//               confirmPasswordsMatch(e.nativeEvent.text, values.password);
//             }}
//             secureTextEntry
//           />
//           <InputWithLabel
//             label={"Pet's name"}
//             placeholder={"Enter pet's name"}
//             value={values.petName}
//             onChangeText={handleChange('petName')}
//           />
//           <InputWithLabel
//             label={"Pet's date of birth"}
//             placeholder={"Enter pet's date of birth"}
//             value={values.petBirthdate}
//             onChangeText={handleChange('petBirthdate')}
//           />
//           <InputWithLabel
//             label={"Breed"}
//             placeholder={"Enter breed"}
//             value={values.breed}
//             onChangeText={handleChange('breed')}
//           />
//           <InputWithLabel
//             label={"Favorite Toy"}
//             placeholder={"Enter Favorite toy"}
//             value={values.toy}
//             onChangeText={handleChange('toy')}
//           />
//           <Button onPress={handleSubmit} title="Submit" />
//         </ScrollView>
//       )}
//     </Formik>
//   );
// };

// export default App;

// const InputWithLabel = (props) => (
//   <View style={{ padding: 16 }}>
//     <Text style={{ padding: 8, fontSize: 18 }}>{props.label}</Text>
//     <TextInput
//       placeholder={props.placeholder}
//       value={props.value}
//       onChangeText={props.onChangeText}
//       style={{ backgroundColor: "lightgray", padding: 8 }}
//       // secureTextEntry={props.label === "Password" ? true : false}
//       secureTextEntry={props.secureTextEntry}
//       onSubmitEditing={props.onSubmitEditing}
//     />
//   </View>
// );