import { ResponsiveChoropleth } from '@nivo/geo'
import { Box, useTheme } from '@mui/material'
import { data } from './data.jsx'
import { geo } from './WorldCountries.jsx'
// eslint-disable-next-line react/prop-types
export default function Geo({ isDahboard = false }) {
	const theme = useTheme()

	return (
		<Box
			sx={{
				borderRadius: '5px',
				height: isDahboard ? '400px' : '75vh',
				border: isDahboard
					? null
					: `1px solid ${theme.palette.text.primary}`,
			}}
		>
			<ResponsiveChoropleth
				projectionScale={isDahboard ? 70 : 140}
				data={data}
				features={geo.features}
				margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
				colors='spectral'
				domain={[0, 1000000]}
				unknownColor='#666666'
				label='properties.name'
				valueFormat='.2s'
				theme={{
					textColor: theme.palette.text.primary,
					fontSize: 11,
					axis: {
						domain: {
							line: {
								stroke: theme.palette.divider,
								strokeWidth: 1,
							},
						},
						legend: {
							text: {
								fontSize: 12,
								fill: theme.palette.text.primary,
							},
						},
						ticks: {
							line: {
								stroke: theme.palette.divider,
								strokeWidth: 1,
							},
							text: {
								fontSize: 11,
								fill: theme.palette.text.secondary,
							},
						},
					},
					grid: {
						line: {
							stroke: theme.palette.divider,
							strokeWidth: 1,
						},
					},
					legends: {
						title: {
							text: {
								fontSize: 11,
								fill: theme.palette.text.primary,
							},
						},
						text: {
							fontSize: 11,
							fill: theme.palette.text.primary,
						},
						ticks: {
							line: {},
							text: {
								fontSize: 10,
								fill: theme.palette.text.primary,
							},
						},
					},
					annotations: {
						text: {
							fontSize: 13,
							fill: theme.palette.text.primary,
							outlineWidth: 2,
							outlineColor: '#ffffff',
							outlineOpacity: 1,
						},
						link: {
							stroke: '#000000',
							strokeWidth: 1,
							outlineWidth: 2,
							outlineColor: '#ffffff',
							outlineOpacity: 1,
						},
						outline: {
							stroke: '#000000',
							strokeWidth: 2,
							outlineWidth: 2,
							outlineColor: '#ffffff',
							outlineOpacity: 1,
						},
						symbol: {
							fill: '#000000',
							outlineWidth: 2,
							outlineColor: '#ffffff',
							outlineOpacity: 1,
						},
					},
					tooltip: {
						container: {
							background: theme.palette.background.default,
							color: theme.palette.text.primary,
							fontSize: 12,
						},
						basic: {},
						chip: {},
						table: {},
						tableCell: {},
						tableCellValue: {},
					},
				}}
				projectionTranslation={[0.5, 0.5]}
				projectionRotation={[0, 0, 0]}
				enableGraticule={false}
				graticuleLineColor='#dddddd'
				borderWidth={0.5}
				borderColor='#152538'
				legends={
					isDahboard
						? []
						: [
								{
									anchor: 'bottom-left',
									direction: 'column',
									justify: true,
									translateX: 20,
									translateY: -100,
									itemsSpacing: 0,
									itemWidth: 94,
									itemHeight: 18,
									itemDirection: 'left-to-right',
									itemTextColor: theme.palette.text.primary,
									itemOpacity: 0.85,
									symbolSize: 18,
									effects: [
										{
											on: 'hover',
											style: {
												itemTextColor: '#000000',
												itemOpacity: 1,
											},
										},
									],
								},
						  ]
				}
			/>
		</Box>
	)
}
