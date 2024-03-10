import { Box } from '@mui/material'
import Line from './Line'
import Header from '../../Header'

// eslint-disable-next-line react/prop-types
export default function LineChart() {
	return (
		<Box>
			<Header title='Line Chart' subTitle='Simple Line Chart' />

			<Line />
		</Box>
	)
}
