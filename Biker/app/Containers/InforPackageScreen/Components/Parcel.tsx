import React from 'react'
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity
} from 'react-native'
import { Picker } from '@react-native-picker/picker'

// Components
import {
  optionCategory,
  OptionCategoryType,
  optionWeight
} from './ParcelConstants'

// Styles
import styles from './Styles/ParcelStyles'

// Language
import { translate } from '@/Language'

const keyExtractorCategory = (item: OptionCategoryType) =>
  'optionCategory' + item.value

type ParcelProps = {
  selectCategory: (value: number) => void
  selectWeight: (value: number) => void
  category: number
  weight: number
}

const Parcel = (props: ParcelProps) => {
  const { selectCategory, selectWeight, category, weight } = props

  const selectType = (index: number) => () => selectCategory(index)
  const onValueChange = (value: number) => selectWeight(value)

  const renderCategory = ({
    item,
    index
  }: ListRenderItemInfo<OptionCategoryType>) => {
    return (
      <TouchableOpacity
        key={index}
        style={[styles.category, index === category && styles.selectedCategory]}
        onPress={selectType(index)}
      >
        <Text style={styles.categoryText}>{translate(item.label)}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{translate('itemDetailts')}</Text>
      <Text style={styles.typeText}>{translate('type')}</Text>
      <FlatList
        data={optionCategory}
        renderItem={renderCategory}
        keyExtractor={keyExtractorCategory}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.weight}>
        <Text style={styles.weightText}>{translate('weight')} (Kg)</Text>
        <Picker
          style={styles.picker}
          onValueChange={onValueChange}
          selectedValue={weight}
          mode={'dropdown'}
        >
          <Picker.Item label={'Choose'} value={-1} />
          {optionWeight.map((weight) => (
            <Picker.Item
              label={weight.label}
              value={weight.value}
              key={weight.value}
            />
          ))}
        </Picker>
      </View>
    </View>
  )
}

export default Parcel
