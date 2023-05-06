import { useSearchParams } from "react-router-dom";

export function WatchPage(props){

	let [searchParamsObj, setSearchParamsObj] = useSearchParams();

	return (
		<h1>
			Watching video with ID of {searchParamsObj.get("video")}
			<button onClick={() => setSearchParamsObj(searchParams => {searchParams.set("video", "dQw4w9WgXcQ"); return searchParams;})} >
				Set query param to rickroll
			</button>
		</h1>
	)

}