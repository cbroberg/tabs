import React, { Component } from 'react'
import * as Icons from 'react-icons/lib/md'
import { Button, Header } from 'components/Styles'
import { toast } from 'react-toastify'
import Toaster from 'components/Toast.js'

class Tabs extends Component {
	state = {
		activeIndex: 0
	}

	notify = (message) => toast(message)

	selectTabIndex(activeIndex, message) {
		this.setState({ activeIndex })
		this.notify(message)
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
					onClick={isDisabled ? null : () => this.selectTabIndex(index, tab.notification)}
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
				label: <Icons.MdCloudDownload size={50}/>,
				content: 'This is our download service',
				notification: 'Thanks! You have now downloaded our service'
			},
			{
				label: <Icons.MdCloudUpload size={50}/>,
				content: 'This is our upload service',
				notification: 'Thanks! You have uploaded your stuff to our service'
			},
			{
				label: <Icons.MdLanguage size={50}/>,
				content: 'This is our translation service',
				notification: 'Thanks! You have selected our translation service'
			},
			{
				label: <Icons.MdDateRange size={50} color={'orange'}/>,
				content: 'This is our date selector service',
				notification: 'Thanks! You have selected our date selector service'
			},

		]
		return (
			<div id="app" className="blue-bg">
				<Tabs 
					data={tabData}
					tabsOnBottom={false}
					disabled={[3]}
				/>
				<div>
					<Toaster
						position="top-right"
						type="default"
						autoClose={4000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						pauseOnHover
					/>
					{/*Can be written <Toaster />. Props defined are the same as the default one. */}
				</div>
			</div>
		)
	}
}

export default App
