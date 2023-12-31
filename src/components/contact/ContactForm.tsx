'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import type { BannerData, EamilData } from '../../@types/custom/contact';
import { sendContactEmail } from '../../services/contact';
import Banner from './Banner';

const FIELD_CLASS = 'text-black px-2 py-3 rounded box-border';

const DEFAULT_DATA = {
	from: '',
	message: '',
	subject: ''
};

export default function ContactForm() {
	const [bannder, setBannder] = useState<BannerData | null>(null);
	const [form, setForm] = useState<EamilData>(DEFAULT_DATA);

	const handleChangeForm = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setForm(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			await sendContactEmail(form);
			setBannder({
				message: '메일을 성공적으로 보냈습니다.',
				state: 'success'
			});
			setForm(DEFAULT_DATA);
		} catch (error) {
			setBannder({
				message: '메일전송에 실패했습니다. 다시 시도해 주세요.',
				state: 'error'
			});
		} finally {
			setTimeout(() => {
				setBannder(null);
			}, 1000 * 3);
		}
	};

	return (
		<section className="w-full max-w-md">
			{bannder && <Banner banner={bannder} />}
			<form className="w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white" onSubmit={handleSubmit}>
				{/* email field */}
				<label className="font-semibold" htmlFor="from">
					Your Email
				</label>
				<input
					className={FIELD_CLASS}
					type="email"
					id="from"
					name="from"
					required
					autoFocus
					value={form.from}
					onChange={handleChangeForm}
				/>
				{/* subject field */}
				<label className="font-semibold" htmlFor="subject">
					Subject
				</label>
				<input
					className={FIELD_CLASS}
					type="text"
					id="subject"
					name="subject"
					required
					value={form.subject}
					onChange={handleChangeForm}
				/>
				{/* message field */}
				<label className="font-semibold" htmlFor="message">
					Message
				</label>
				<textarea
					className={FIELD_CLASS}
					id="message"
					name="message"
					required
					value={form.message}
					onChange={handleChangeForm}
					rows={10}
				/>
				{/* submit button */}
				<button
					className="bg-blue-500 text-white font-bold px-2 py-3 rounded box-border transition-all hover:bg-blue-600"
					type="submit"
				>
					Submit
				</button>
			</form>
		</section>
	);
}
