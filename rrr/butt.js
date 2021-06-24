import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

export const VPC = () => {
  let [a, setText] = useState('');
  return (
    <View>
      <TextInput
        style={{width: 200,
          height: 40,
          borderWidth: 1,
          borderColor: '#000',
          borderRadius: 20,
          textAlign: 'center',
          fontSize: 25,
          color: '#000',
          marginBottom: 15}} 
        keyboardType='numeric'
        placeholder="Введите число"
        onChangeText={text => setText(text)}
        defaultValue={a}
      />
      <Button 
            title="Посчитать"
            onPress={() => { 
                for (let i = 2; i <= a; i++) {
                    let f = 1;
                    if (i > 2 && i % 2 != 0)
                    {
                        for (let j = 3; j*j <= i ; j=j+2)
                        {
                            if (i%j==0)
                            {
                                f=0;
                                break;
                            }
                        }
                    }
                    else if (i != 2) f = 0;
                    if (f==1) 
                    {
                        alert("Простые числа: "+i);
                    }
                }
            }}
            />
    </View>
  );
}
