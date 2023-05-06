import { useParams } from "react-router-dom";

export function ArticlePage(props){

	let {id, photoId} = useParams();

	return(
		<div>
			<h1>Article ID is {id}! </h1>
			<p>Photo ID is {photoId}</p>
		</div>
	)

}