import './style.css';
import { Link } from 'react-router-dom';

const Recommendations = () => {
    const hotels = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
            category: "Hotel",
            title: "Hermitage Hotel",
            location: "Buenos Aires",
            description: "Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds. Sleep. Scream at teh bath ptracy eat an easter feather as if it were a bird then burp victoriously, but tender or find empty spot in cupboard and sleep all day."
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
            category: "Hotel",
            title: "Hermitage Hotel",
            location: "Buenos Aires",
            description: "Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds. Sleep. Scream at teh bath ptracy eat an easter feather as if it were a bird then burp victoriously, but tender or find empty spot in cupboard and sleep all day."
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
            category: "Hotel",
            title: "Hermitage Hotel",
            location: "Buenos Aires",
            description: "Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds. Sleep. Scream at teh bath ptracy eat an easter feather as if it were a bird then burp victoriously, but tender or find empty spot in cupboard and sleep all day."
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
            category: "Hotel",
            title: "Hermitage Hotel",
            location: "Buenos Aires",
            description: "Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds. Sleep. Scream at teh bath ptracy eat an easter feather as if it were a bird then burp victoriously, but tender or find empty spot in cupboard and sleep all day."
        },
        {
            id: 5,
            img: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
            category: "Hotel",
            title: "Hermitage Hotel",
            location: "Buenos Aires",
            description: "Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds. Sleep. Scream at teh bath ptracy eat an easter feather as if it were a bird then burp victoriously, but tender or find empty spot in cupboard and sleep all day."
        },
        {
            id: 6,
            img: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
            category: "Hotel",
            title: "Hermitage Hotel",
            location: "Buenos Aires",
            description: "Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds. Sleep. Scream at teh bath ptracy eat an easter feather as if it were a bird then burp victoriously, but tender or find empty spot in cupboard and sleep all day."
        },
        {
            id: 7,
            img: "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1858&q=80",
            category: "Hotel",
            title: "Hermitage Hotel",
            location: "Buenos Aires",
            description: "Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds. Sleep. Scream at teh bath ptracy eat an easter feather as if it were a bird then burp victoriously, but tender or find empty spot in cupboard and sleep all day."
        },
        {
            id: 8,
            img: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
            category: "Hotel",
            title: "Hermitage Hotel",
            location: "Buenos Aires",
            description: "Jump up to edge of bath, fall in then scramble in a mad panic to get out meowsiers. Chirp at birds. Sleep. Scream at teh bath ptracy eat an easter feather as if it were a bird then burp victoriously, but tender or find empty spot in cupboard and sleep all day."
        }
        ];

    return(
        <div id="recommendations">
            {hotels.map(hotel => 
                
                <div key={hotel.id} id={`recommendation${hotel.id}`} className="recommendation">
                    <img src={hotel.img} alt="" />
                    <div className="recommendationInfo">
                        <p>{hotel.category}</p>
                        <h3>{hotel.title}</h3>
                        <p>{hotel.location}</p>
                        <p>{hotel.description}</p>
                        <Link to="/"><button>Ver detalhes</button></Link>
                    </div>
                </div>
                
                )}
                
        </div>
    );
}

export default Recommendations;