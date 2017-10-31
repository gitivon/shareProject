/**
 * callback for catch 
 */
const fn = (f) => {
	setTimeout(_=>{
		// throw Error('fn error')
		return f()
	}, 100)
}

try{
	fn(()=> {
		throw new Error('error line 13')
	})
}catch(e){
	console.log('catch an error')
}
