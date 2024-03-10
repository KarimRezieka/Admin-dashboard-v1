import { Box } from '@mui/material'
import Bar from './Bar.jsx'
import Header from '../../Header'

// eslint-disable-next-line react/prop-types
export default function BarChart() {
	return (
		<Box>
			<Header
				title='Bar Chart'
				subTitle='The minimum wage in Germany, France and Spain (EUR/month)'
			/>
			<Bar />
		</Box>
	)
}
