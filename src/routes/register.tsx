import { signIn, useSignIn } from '@/lib/api/fetchers/signin'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/register')({
	component: Register,
})

function Register() {
	const { mutate } = useSignIn()
	//  biography?: string;
	// email: string;
	// firstName: string;
	// lastName?: string;
	// password: string;
	return (
		<div className="m-4" >
			<h1>Register</h1>
			<form>
				{/* -- first name -- */}
				<div />
				{ /* -- last name -- */}
				<div />
				{/* -- email -- */}
				<div />
				{ /* -- password -- */}
				<div />
				{/* -- confirm password -- */}
				<div />
				{/* -- submit button -- */}
				<button>Submit</button>
			</form>
		</div >
	)
}
