import React, {useRef} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import textInputStyle from '../resource/styles/textInputStyle';
import colors from '../constants/colors';
import IconDownArrowGrey from '../resource/icon/ic-down-arrow.svg';
const ModalDropdownComponent = ({
  data,
  customStyle = {},
  customStyleBorder = {},
  customInput = {},
  onValueChange,
  errorMessage,
  value,
  disable = false,
  showIconArrowDown = true,
  isStyleButton = true,
  textColor,
  countryCodeStyle = {},
  label,
  borderBottomWidth,
  placeholder = '未設定',
  type = '',
  title = '',
  pickerView = {},
}) => {
  let inputRef = null;

  return (
    <View style={[{flex: 1}, customStyle]}>
      <View
        style={[
          // textInputStyle.textInput,
          styles.container,
          countryCodeStyle,
          {borderColor: errorMessage ? colors.red : colors.borderColor},
          customStyleBorder,
        ]}>
        {label}
        <View style={[pickerView]}>
          <RNPickerSelect
            items={data}
            onValueChange={values => {
              if (values) {
                onValueChange(values);
              } else {
                onValueChange('');
              }
            }}
            useNativeAndroidPickerStyle={false}
            ref={el => {
              inputRef = el;
            }}
            style={isStyleButton ? {...pickerSelectStyles} : {...customInput}}
            fixAndroidTouchableBug={true}
            placeholder={
              type === 'basic' ? {} : {label: placeholder, value: ''}
            }
            value={value}
            doneText={'完了'}
            onClose={() => {}}
            disabled={disable}
            // onDonePress={() => inputRef.togglePicker(true)}
            textInputProps={textColor ? textColor : null}
            Icon={() => {
              return (
                <>
                  {showIconArrowDown ? (
                    <View style={styles.icDropDown}>
                      <IconDownArrowGrey />
                    </View>
                  ) : null}
                </>
              );
            }}
          />
        </View>
      </View>
      {borderBottomWidth}
      {errorMessage ? (
        <Text style={textInputStyle.error}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  icDropDown: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    marginRight: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 15,
    color: colors.black,
    marginRight: '9%',
  },
  inputAndroid: {
    fontSize: 15,
    marginRight: '9%',
    color: colors.black,
    textAlign: 'left',
  },
  inputAndroidContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    // width: Dimensions.get('window').width / 1.7,
  },
  inputIOSContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
    height: 30,
    // width: Dimensions.get('window').width / 1.7,
  },
  viewContainer: {
    justifyContent: 'center',
  },
  chevron: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    width: 0,
    height: 0,
  },
});
export default ModalDropdownComponent;
