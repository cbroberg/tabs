import React, { Component } from 'react'
import FaAutomobile from 'react-icons/lib/fa/automobile'
import FaBed from 'react-icons/lib/fa/bed'
import FaPlane from 'react-icons/lib/fa/plane'
import FaSpaceShuttle from 'react-icons/lib/fa/space-shuttle'
import { Button, Header } from 'components/Styles'

class Tabs extends Component {
	state = {
		activeIndex: 0
	}

	selectTabIndex(activeIndex) {
		this.setState({ activeIndex })
		console.log(activeIndex)
	}

	renderTabs() {
		const { data, disabled } = this.props
		return data.map((tab, index) => {
			// const isActive = this.state.activeIndex === index
			const isDisabled = disabled.includes(index)
			return (
				<Button
					key={index}
					disable={isDisabled}
					//	className={isDisabled ? 'tab disabled' : isActive ? 'tab active' : 'tab'}
					onClick={isDisabled ? null : () => this.selectTabIndex(index)}
				>{tab.label}
				</Button>
			)
		})
	}

	renderPanel() {
		const { data } = this.props
		const { activeIndex } = this.state
		return (
			<div>
				<Header>
					{data[activeIndex].content}
				</Header>
			</div>
		)
		
	}

	render() {
		const { tabsOnBottom } = this.props
		const tabs = (
			<div key="tabs" className="tabs">
				{this.renderTabs()}
			</div>
		)
		const panel = (
			<div key="panels" className="panels">
				{this.renderPanel()}
			</div>			
		)

		return (
			<div key="Tabs" className="Tabs">
				{tabsOnBottom ? [panel, tabs] : [tabs, panel]}
			</div>	
		)
	}
}

class App extends Component {
	render() {
		const tabData = [
			{ 
				label: <FaAutomobile size={50}/>,
				content: 'This is our car service' 
			},
			{
				label: <FaBed size={50}/>,
				content: 'This is our hotel service'
			},
			{
				label: <FaPlane size={50}/>,
				content: 'This is our air travel service'
			},
			{
				label: <FaSpaceShuttle size={50} color={'orange'}/>,
				content: 'This is our space shuttle service'
			},
			
		]
		return (
			<div id="app" className="blue-bg">
				<Tabs 
					data={tabData}
					tabsOnBottom={false}
					disabled={[3]}
				/>
			</div>
		)
	}
}

export default App
