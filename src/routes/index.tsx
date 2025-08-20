import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: App,
})

function App() {
	return (
		<div className="m-4">
			<h1>Welcome</h1>
		</div>
	)
}
