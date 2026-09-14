import getAttrNameFromSelector from "@/utils/getAttrnameFromSelector";

const getParams = (element, dataAttrSelector) => {
    return JSON.parse(
        element.getAttribute(
            getAttrNameFromSelector(dataAttrSelector)
        )
    );

}
export default getParams