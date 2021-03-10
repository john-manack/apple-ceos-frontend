import { useParams } from 'react-router-dom';

// below is a nifty way to destructure props as you pass them through as an argument
const CeoDetails = ({ceos}) => {
    const { ceo_slug } = useParams();
    const ceo = ceos.find(ceo => {
        return ceo.slug === ceo_slug ? ceo : null;
    })


    return (
        <p>{ceo.name} was CEO of Apple in {ceo.year}.</p>
    )
}

export default CeoDetails;