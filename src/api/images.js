import gate from '@/api/axios';

const IMAGES_URL = '';

export const imageGet = async (payload) => gate.get(IMAGES_URL, payload);