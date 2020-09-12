import Photos from "./slices/Photos"
import Videos from "./slices/Videos.jsx"
import ContactForm from "./slices/ContactForm";
import About from "./slices/About";

const Slice = (props) => {
    const { slice_type } = props.slice;

    const sliceType = () => {
        switch(slice_type){
            case 'photos':
                return <Photos {...props} />
            case 'videos':
                return <Videos {...props} />
            case 'contact_form':
                return <ContactForm {...props} />
            case 'about_me':
                return <About {...props} />
            default:
                return null
        }
    }

    return sliceType()
}

export default Slice