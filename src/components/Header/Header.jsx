import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-2 md:flex max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="Profile logo" />
        </header>
    );
};

export default Header;