import React from 'react';
import { ArrayHelpers, Field } from 'formik';

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
import { ItemRead } from '../models/item';
import { SurvivorResource } from '../models/survivor';

export interface InventoryItemProps extends ArrayHelpers {
	item: ItemRead;
	quantity: number;
}

function SurvivorRegistrationInventoryItem(props: InventoryItemProps): React.ReactElement<InventoryItemProps> {
	const handleChange = (_: string, quantity: number) => {
		const resource: SurvivorResource = { item_id: props.item.id, quantity };
		props.replace(resource.item_id, resource);
	}

	return (
		<FormControl paddingBottom={15}>
			<HStack spacing={5}>
				<Icon as={getItemIcon(props.item.icon)} w={8} h={8} />
				<Text w={230}>{props.item.name}</Text>

				<Spacer />

				<Field
					min={0}
					as={NumberInput}
					name={`survivor.inventory.${props.item.id}.quantity`}
					value={props.quantity}
					onChange={handleChange}
				>
					<NumberInputField />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</Field>
			</HStack>
		</FormControl>
	);
}

export default SurvivorRegistrationInventoryItem;