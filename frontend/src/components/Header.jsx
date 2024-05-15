import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-purple-900 text-white font-bold text-lg flex justify-between p-5'>
            <Link to='/'>
                <div>
                    KaBOOT
                </div>
            </Link>
            <Link to='/instructions'>
                <div>
                    Instructions
                </div>
            </Link>

        </div>
    )
}

export default Header