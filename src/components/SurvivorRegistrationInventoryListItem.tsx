import React from 'react';

import {
	FormControl,
	HStack,
	Icon,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Spacer,
	Text
} from '@chakra-ui/react';

import { getItemIcon } from '../constants/itemIcons';

function SurvivorRegistrationInventoryItem({ item }: any): React.ReactElement {
	return (
		<FormControl paddingBottom={15}>
			<HStack spacing={5}>
				<Icon as={getItemIcon(item.icon)} w={8} h={8} />
				<Text w={230}>{item.name}</Text>
				<Spacer />

				<NumberInput min={0}>
					<NumberInputField />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
			</HStack>
		</FormControl>
	);
}

export default SurvivorRegistrationInventoryItem;