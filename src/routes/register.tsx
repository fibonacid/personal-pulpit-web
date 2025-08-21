import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { signIn, useSignIn } from '@/lib/api/fetchers/signin'
import { createFileRoute } from '@tanstack/react-router'
import { useCallback, useState, type FormEventHandler } from 'react'

export const Route = createFileRoute('/register')({
	component: Register,
})

function Register() {
	const { mutate } = useSignIn()

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>((event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}
		mutate({
			firstName,
			lastName,
			email,
			password,
		}, {
			onSuccess: (data) => {
				alert('Registration successful!');
				console.log(data);
			},
			onError: (error) => {
				alert('Registration failed: ' + error.message);
				console.error(error);
			}
		});
	}, [password, confirmPassword]);

	return (
		<div className="m-4" >
			<h1>Register</h1>
			<form className="flex flex-col gap-2" onSubmit={handleSubmit}>
				{/* -- first name -- */}
				<Input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}
					autoComplete="given-name"
					required
				/>
				{ /* -- last name -- */}
				<Input placeholder="Last Name"
					onChange={(e) => setLastName(e.target.value)}
					autoComplete="family-name"
					required
				/>
				{/* -- email -- */}
				<Input placeholder="Email" type="email"
					onChange={(e) => setEmail(e.target.value)}
					autoComplete="email"
					required
				/>
				{ /* -- password -- */}
				<Input placeholder="Password" type="password"
					onChange={(e) => setPassword(e.target.value)}
					autoComplete="new-password"
					required
				/>
				{/* -- confirm password -- */}
				<Input placeholder="Confirm Password" type="password"
					onChange={(e) => setConfirmPassword(e.target.value)}
					autoComplete="new-password"
					required
				/>
				{/* -- submit button -- */}
				<Button>Submit</Button>
			</form>
		</div >
	)
}
