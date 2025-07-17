function ClientCard({image, description, name, profession}) {
    return (
        <div className='client-card flex justify-between min-w-full items-center px-8 py-12 shadow-[0px_0px_10px_#1b1b1b]'>
            <div className='w-1/4'>
                <img src={image} className='w-full rounded-full' />
            </div>
            <div className='w-[70%] relative'>
                <div className='client-info absolute text-right right-5 bottom-[-80%] text-red-500'>
                    <h1 className='thirdHeading clientName text-3xl font-semibold mb-0.5'>{name}</h1>
                    <span className='description clientProfession text-[14.5px] font-medium'>{profession}</span>
                </div>
                <p className='description text-lg'>{description}</p>
            </div>
        </div>
    );
}

export default ClientCard;