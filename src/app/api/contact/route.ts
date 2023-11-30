import * as yup from 'yup';

import type { EamilData } from '../../../@types/custom/contact';
import { sendEmail } from '../../../services/email';

const bodySchema: yup.ObjectSchema<EamilData> = yup.object().shape({
	from: yup.string().email().required(),
	message: yup.string().required(),
	subject: yup.string().required()
});

export const POST = async (request: Request) => {
	const body = await request.json();

	if (!bodySchema.isValidSync(body)) {
		return new Response(JSON.stringify({ message: '유효하지 않은 데이터 값입니다.' }), { status: 400 });
	}

	return sendEmail(body)
		.then(() => new Response(JSON.stringify({ message: '메일을 성공적으로 보냈습니다.' }), { status: 200 }))
		.catch(error => {
			console.error(error);
			return new Response(JSON.stringify({ message: '메일전송을 실패했습니다.' }), { status: 500 });
		});
};
