import axios from 'axios';
import { useEffect, useState } from 'react';
const useGetProducts = (api) => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(async () => {
		const cancelToken = axios.CancelToken;
		const source = cancelToken.source();

		try {
			const { data } = await axios(api, { cancelToken: source.token });

			if (data) {
				setProducts([...products, ...data]);
				setLoading(false);
			}
		} catch (err) {
			if (axios.isCancel(err)) {
				return 'axios request cancelled';
			}
			console.log('Error: ', err);
		}

		return { products, loading };
	}, []);

            
    console.log("inside custom hook");
    return products;
}

export default useGetProducts();
