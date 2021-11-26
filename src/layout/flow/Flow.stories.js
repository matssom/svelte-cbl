import FlowView from './Flow.view.svelte';
import GlobalDecorator from '../../global/GlobalDecorator.svelte'

export default {
  	title: 'layout/Flow',
  	component: FlowView,
	argTypes: {
		gap: {
			options: ['tiny', 'small', 'medium', 'large', 'huge'],
			control: { type: 'select' },
			description: "Accepts keywords (huge, large, medium, small, tiny) or any css size (ex: 3rem)",
			table: {
				type: {
				  summary: 'string',
				},
				defaultValue: {
				  summary: 'small',
				},
			},	
		}
  	},
	decorators: [() => GlobalDecorator]
}

const Template = (args) => ({ 
	component: FlowView, 
	props: args
});

export const Flow = Template.bind({});