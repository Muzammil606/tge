import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import Slider from './components/slider/slider'
import Testimonials from './components/Testimonials'
import Facilities from './components/Facilities'
import FAQ from './components/Accordion'

export default function Home() {
  return (
    <>
      <header className='grid grid-cols-12 lg:grid-cols-6 px-2 lg:px-10 bg-[#092413] h-[65px]'>
        <Image
          className='col-span-3 lg:col-span-1'
          src='/splash-logo.png'
          alt='The Great Escape Water Park Logo'
          width={140}
          height={0}
        />
        <nav className='col-span-4 h-[inherit] hidden lg:flex items-center justify-center'>
          <Link className='text-white hover:text-[#00c9fc] capitalize text-[16px] font-[700] me-5' href='javascript:void(0);'>home</Link>
          <Link className='text-white hover:text-[#00c9fc] capitalize text-[16px] font-[700] me-5' href='javascript:void(0);'>attractions</Link>
          <Link className='text-white hover:text-[#00c9fc] capitalize text-[16px] font-[700] me-5' href='javascript:void(0);'>food</Link>
          <Link className='text-white hover:text-[#00c9fc] capitalize text-[16px] font-[700] me-5' href='javascript:void(0);'>offers</Link>
          <Link className='text-white hover:text-[#00c9fc] capitalize text-[16px] font-[700] me-5' href='javascript:void(0);'>group booking</Link>
          <Link className='text-white hover:text-[#00c9fc] capitalize text-[16px] font-[700] me-5' href='javascript:void(0);'>quick info</Link>
          <Link className='text-white hover:text-[#00c9fc] capitalize text-[16px] font-[700] me-5' href='javascript:void(0);'>what's new</Link>
          <Link className='text-white hover:text-[#00c9fc] capitalize text-[16px] font-[700]' href='javascript:void(0);'>gallery</Link>
        </nav>
        <ul className='h-[inherit] hidden lg:flex items-center justify-end'>
          <li className='me-5'>
            <Link href='javascript:void(0);'>
              <div className='bg-white rounded-full w-[28px] hover:scale-110 transition-all duration-300 h-[28px] flex items-center justify-center'>
                <Image
                  className=''
                  src='/icons/google.png'
                  alt='icon'
                  width={14}
                  height={14}
                />
              </div>
            </Link>
          </li>
          <li className='me-5'>
            <Link href='javascript:void(0);'>
              <div className='bg-white rounded-full w-[28px] hover:scale-110 transition-all duration-300 h-[28px] flex items-center justify-center'>
                <Image
                  className=''
                  src='/icons/linkedin.png'
                  alt='icon'
                  width={14}
                  height={14}
                />
              </div>
            </Link>
          </li>
          <li>
            <Link href='javascript:void(0);'>
              <div className='bg-white rounded-full w-[28px] hover:scale-110 transition-all duration-300 h-[28px] flex items-center justify-center'>
                <Image
                  className=''
                  src='/icons/youtube.png'
                  alt='icon'
                  width={14}
                  height={14}
                />
              </div>
            </Link>
          </li>
        </ul>
        <div className='col-span-3 md:col-span-5 h-[inherit] flex flex-col items-end justify-center lg:hidden'>
          <div className='flex items-center justify-center'>
            <p className='text-[#EDE82A] me-1'>TGE</p>
            <Image
              className='me-1'
              src='/icons/yellow-cloud-snow.png'
              alt='icon'
              width={20}
              height={20}
            />
            <p className='text-[#EDE82A]'>+20</p>
          </div>
          <div className='flex items-center justify-center'>
            <p className='text-[#F85E5B] me-1'>BOM</p>
            <Image
              className='me-1'
              src='/icons/red-cloud-snow.png'
              alt='icon'
              width={20}
              height={20}
            />
            <p className='text-[#F85E5B]'>-20</p>
          </div>
        </div>
        <div className='col-span-3 md:col-span-2 h-[inherit] flex flex-col items-end justify-center lg:hidden'>
          <p className='bg-[#F85E5B] rounded-full text-xs text-white capitalize px-1'>new</p>
          <p className='text-[#EDE82A] capitalize'>attractions</p>
        </div>
        <div className='col-span-2 md:col-span-1 h-[inherit] flex items-center justify-center lg:hidden'>
          <Image
            src='/icons/phone-call.png'
            alt='Phone Call'
            width={25}
            height={25}
          />
        </div>
        <div className='col-span-1 h-[inherit] flex items-center justify-center lg:hidden'>
          <Image
            src='/icons/hamburger.png'
            alt='Phone Call'
            width={25}
            height={25}
          />
        </div>
      </header>
      <main>

        {/*---------- BANNER START ----------*/}
        <section className='h-[70vh] bg-[url(/banner.jpg)] bg-no-repeat bg-cover bg-center'>

        </section>
        {/*---------- BANNER END ----------*/}

        {/*---------- BOOKING START ----------*/}
        <section className='bg-[#092413] bg-[url(/images/bg/booking-package.png)] bg-no-repeat [length:394px_404px] bg-left-bottom pt-6 pb-14 px-4 md:px-16 lg:px-20'>
          <h1 className='text-[#FFBD59] text-[40px] text-center capitalize mb-4 under'>bookings packages</h1>
          <ul className='flex flex-wrap justify-center text-white text-[16px] font-semibold capitalize mb-5'>
            <li className='me-5 underline hover:underline decoration-2 decoration-[#FFBD59] underline-offset-8 cursor-pointer'>group booking</li>
            <li className='me-5 hover:underline decoration-2 decoration-[#FFBD59] underline-offset-8 cursor-pointer'>Corporate booking</li>
            <li className='hover:underline decoration-2 decoration-[#FFBD59] underline-offset-8 cursor-pointer'>family booking</li>
          </ul>
          <Slider />
        </section>
        {/*---------- BOOKING END ----------*/}

        {/*---------- ATTRACTIONS START ----------*/}
        <section className='bg-[url(/images/bg/d-attractions.png)] bg-no-repeat bg-contain bg-bottom py-6 px-4 md:px-16 lg:px-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10'>
            <div className='flex flex-col justify-center'>
              <h1 className='text-[#092413] text-[40px] capitalize mb-4'>Attraction points</h1>
              <p className='mb-3'>Lorem ipsum dolor sit amet consectetur. Egestas ornare nisi ut volutpat. Nisl est proin arcu enim facilisis nisl.</p>
              <p className='mb-3'>Lorem ipsum dolor sit amet consectetur. Egestas ornare nisi ut volutpat. Nisl est proin arcu enim facilisis nisl.</p>
              <p className='mb-3'>Lorem ipsum dolor sit amet consectetur. Egestas ornare nisi ut volutpat. Nisl est proin arcu enim facilisis nisl.</p>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <div className='relative bg-[#092413] rounded-lg p-2'>
                <Image
                  className='w-full rounded-lg mb-2'
                  src='/attraction.jpg'
                  alt='The Great Escape Water Park Logo'
                  width={300}
                  height={0}
                />
                <p className='text-white text-center font-semibold capitalize'>Blog title heading will go here</p>
              </div>
              <div className='relative bg-[#092413] rounded-lg p-2'>
                <Image
                  className='w-full rounded-lg mb-2'
                  src='/attraction.jpg'
                  alt='The Great Escape Water Park Logo'
                  width={300}
                  height={0}
                />
                <p className='text-white text-center font-semibold capitalize'>Blog title heading will go here</p>
              </div>
              <div className='relative bg-[#092413] rounded-lg p-2'>
                <Image
                  className='w-full rounded-lg mb-2'
                  src='/attraction.jpg'
                  alt='The Great Escape Water Park Logo'
                  width={300}
                  height={0}
                />
                <p className='text-white text-center font-semibold capitalize'>Blog title heading will go here</p>
              </div>
              <div className='relative bg-[#092413] rounded-lg p-2'>
                <Image
                  className='w-full rounded-lg mb-2'
                  src='/attraction.jpg'
                  alt='The Great Escape Water Park Logo'
                  width={300}
                  height={0}
                />
                <p className='text-white text-center font-semibold capitalize'>Blog title heading will go here</p>
              </div>
            </div>
          </div>
        </section>
        {/*---------- ATTRACTIONS END ----------*/}

        {/*---------- MAPS START ----------*/}
        <section className='bg-[#092413] py-6 px-4 md:px-16 lg:px-20'>
          <h1 className='text-white text-[40px] text-center capitalize mb-4'>maps</h1>
          <p className='text-white text-center w-[75vw] md:w-[500px] mx-auto mb-6'>Lorem ipsum dolor sit amet consectetur. Egestas ornare nisi ut volutpat. Nisl est proin arcu enim facilisis nisl.</p>
          <ul className='flex justify-center list-none mb-6'>
            <li>
              <Link href='javascript:void(0);'>
                <h1 className='bg-[#6FD6EF] rounded-full py-[4px] px-[24px] text-[#092413] text-[24px] text-center capitalize me-4'>kids zone</h1>
              </Link>
            </li>
            <li>
              <Link href='javascript:void(0);'>
                <h1 className='bg-[#81DA9E] rounded-full py-[4px] px-[24px] text-[#092413] text-[24px] text-center capitalize'>family zone</h1>
              </Link>
            </li>
          </ul>
          <div className=''>
            <Image
              className='rounded-xl m-auto'
              src='/map.jpg'
              alt='Map'
              width={700}
              height={0}
            />
          </div>
        </section>
        {/*---------- MAPS END ----------*/}

        {/*---------- EVENTS START ----------*/}
        <section className='bg-[url(/images/bg/event.png)] bg-no-repeat bg-cover bg-top py-6 px-4 md:px-16 lg:px-20'>
          <h1 className='text-white text-[40px] capitalize mb-4'>upcoming events</h1>
          <p className='text-white w-[80vw] md:w-[500px] mb-6'>Lorem ipsum dolor sit amet consectetur. Egestas ornare nisi ut volutpat. Nisl est proin arcu enim facilisis nisl.</p>
          <div className='grid grid-cols-3 gap-3 md:gap-6'>
            <div className=''>
              <Image
                className='rounded-xl'
                src='/event.jpg'
                alt='Event'
                width={600}
                height={0}
              />
            </div>
            <div className=''>
              <Image
                className='rounded-xl'
                src='/event.jpg'
                alt='Event'
                width={600}
                height={0}
              />
            </div>
            <div className=''>
              <Image
                className='rounded-xl'
                src='/event.jpg'
                alt='Event'
                width={600}
                height={0}
              />
            </div>
          </div>
        </section>
        {/*---------- EVENTS END ----------*/}

        {/*---------- OFFER START ----------*/}
        <section className='bg-[url(/images/bg/grass.png)] bg-no-repeat bg-contain bg-bottom pt-6 pb-28 px-4 md:px-16 lg:px-20'>
          <h1 className='text-[#092413] text-[40px] capitalize mb-4'>Offers</h1>
          <p className='text-[#092413] w-[80vw] md:w-[500px] mb-6'>Lorem ipsum dolor sit amet consectetur. Egestas ornare nisi ut volutpat. Nisl est proin arcu enim facilisis nisl.</p>
          <div className='grid grid-cols-4 gap-3 md:gap-6'>
            <div className=''>
              <Image
                className='rounded-xl'
                src='/offer.jpg'
                alt='Offer'
                width={600}
                height={0}
              />
            </div>
            <div className=''>
              <Image
                className='rounded-xl'
                src='/offer.jpg'
                alt='Offer'
                width={600}
                height={0}
              />
            </div>
            <div className=''>
              <Image
                className='rounded-xl'
                src='/offer.jpg'
                alt='Offer'
                width={600}
                height={0}
              />
            </div>
            <div className=''>
              <Image
                className='rounded-xl'
                src='/offer.jpg'
                alt='Offer'
                width={600}
                height={0}
              />
            </div>
          </div>
        </section>
        {/*---------- OFFER END ----------*/}

        {/*---------- TESTIMONIALS START ----------*/}
        <section className='bg-[#092413] bg-[url(/images/bg/d-testimonials.jpg)] bg-no-repeat bg-cover bg-center pt-6 pb-14 px-4 md:px-16 lg:px-20'>
          <h1 className='text-white text-[40px] text-center capitalize mb-2'>Testimonials</h1>
          <p className='text-white text-[20px] text-center w-[75vw] md:w-[500px] mx-auto mb-20'>Lorem ipsum dolor sit amet, Nert adipiscing </p>
          <Testimonials />
        </section>
        {/*---------- TESTIMONIALS END ----------*/}

        {/*---------- SALE START ----------*/}
        <section className='text-center py-14 px-4 md:px-16 lg:px-20'>
          <h1 className='text-[#092413] text-[40px] capitalize mb-4'>Title heading will go here</h1>
          <p className='text-[#092413] w-[80vw] md:w-[500px] mx-auto mb-6'>Lorem ipsum dolor sit amet consectetur. Egestas ornare nisi ut volutpat. Nisl est proin arcu enim facilisis nisl.</p>
          <div className='w-[80%] md:w-[600px] mx-auto bg-gradient-to-b from-[#FF912C] to-[#D84C1F] rounded-xl px-10'>
            <div className='bg-[#EDE82A] rounded-br-xl rounded-bl-xl w-[60%] m-auto mb-4 p-2'>
              <p className='text-[#092413] text-[24px] text-center font-bold capitalize'>This weekend Price</p>
            </div>
            <div className='grid grid-cols-3 gap-3'>
              <div className='text-center'>
                <div className='bg-white hover:bg-[#00C2FF] transition-all duration-300 rounded-xl p-5'>
                  <p className='text-[#121212] text-[20px] font-bold'>Friday</p>
                  <p className='text-[#121212] text-[30px] font-bold'>27<sup>th</sup></p>
                  <p className='text-[#121212] text-[18px] font-bold'><del>&#8377;500</del> / &#8377;200</p>
                </div>
                <button className='relative bottom-4 bg-[#00455A] text-white font-medium rounded-full px-3 py-2'>Book Now</button>
              </div>
              <div className='text-center'>
                <div className='bg-white hover:bg-[#00C2FF] transition-all duration-300 rounded-xl p-5'>
                  <p className='text-[#121212] text-[20px] font-bold'>Friday</p>
                  <p className='text-[#121212] text-[30px] font-bold'>27<sup>th</sup></p>
                  <p className='text-[#121212] text-[18px] font-bold'><del>&#8377;500</del> / &#8377;200</p>
                </div>
                <button className='relative bottom-4 bg-[#00455A] text-white font-medium rounded-full px-3 py-2'>Book Now</button>
              </div>
              <div className='text-center'>
                <div className='bg-white hover:bg-[#00C2FF] transition-all duration-300 rounded-xl p-5'>
                  <p className='text-[#121212] text-[20px] font-bold'>Friday</p>
                  <p className='text-[#121212] text-[30px] font-bold'>27<sup>th</sup></p>
                  <p className='text-[#121212] text-[18px] font-bold'><del>&#8377;500</del> / &#8377;200</p>
                </div>
                <button className='relative bottom-4 bg-[#00455A] text-white font-medium rounded-full px-3 py-2'>Book Now</button>
              </div>
            </div>
          </div>
        </section>
        {/*---------- SALE END ----------*/}

        {/*---------- REVIEW START ----------*/}
        <section className='bg-[#092413]'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10'>
            <div className='text-white text-center flex flex-col justify-center px-32'>
              <div className='grid grid-cols-5 gap-5'>
                <Image
                  className='w-full'
                  src='/icons/star.png'
                  alt='The Great Escape Water Park Logo'
                  width={100}
                  height={100}
                />
                <Image
                  className='w-full'
                  src='/icons/star.png'
                  alt='The Great Escape Water Park Logo'
                  width={100}
                  height={100}
                />
                <Image
                  className='w-full'
                  src='/icons/star.png'
                  alt='The Great Escape Water Park Logo'
                  width={100}
                  height={100}
                />
                <Image
                  className='w-full'
                  src='/icons/star.png'
                  alt='The Great Escape Water Park Logo'
                  width={100}
                  height={100}
                />
                <Image
                  className='w-full'
                  src='/icons/star.png'
                  alt='The Great Escape Water Park Logo'
                  width={100}
                  height={100}
                />
              </div>
              <p className='text-[6rem] font-extrabold leading-[8rem]'>1.5 CR</p>
              <p className='text-[1.2rem] mb-10'><b>Customer</b> delivered amazing happiness memory & rated us.</p>
              <Image
                className='w-[250px] mx-auto'
                src='/icons/review.png'
                alt='The Great Escape Water Park Logo'
                objectFit='cover'
                width={500}
                height={0}
              />
            </div>
            <Image
              className='w-full'
              src='/review.jpg'
              alt='The Great Escape Water Park Logo'
              objectFit='cover'
              width={500}
              height={0}
            />
          </div>
        </section>
        {/*---------- REVIEW END ----------*/}

        {/*---------- FACILITIES START ----------*/}
        <section className='py-14 px-4 md:px-16 lg:px-20'>
          <h1 className='text-[#092413] text-[40px] text-center capitalize mb-4'>facilities</h1>
          <p className='text-[#092413] text-center w-[75vw] md:w-[500px] mx-auto mb-20'>Lorem ipsum dolor sit amet consectetur. Egestas ornare nisi ut volutpat. Nisl est proin arcu enim facilisis nisl.</p>
          <Facilities />
        </section>
        {/*---------- FACILITIES END ----------*/}

        {/*---------- GALLERY START ----------*/}
        <section className='py-14 px-4 md:px-16 lg:px-20'>
          <h1 className='text-[#092413] text-[40px] text-center capitalize mb-4'>gallery</h1>
          <p className='text-[#092413] text-center w-[75vw] md:w-[500px] mx-auto mb-20'>Lorem ipsum dolor sit amet consectetur. Egestas ornare nisi ut volutpat. Nisl est proin arcu enim facilisis nisl.</p>
          <div className='grid grid-cols-5 gap-3 md:gap-6'>
          </div>
        </section>
        {/*---------- GALLERY END ----------*/}

        {/*---------- SPIN WHEEL START ----------*/}
        <section className='h-[50vw] bg-[url(/images/bg/spin.jpg)] bg-no-repeat bg-cover bg-top'>
          {/* <div className='relative top-28 flex justify-center'>
            <Image
              className=''
              src='/images/elements/spinwheel.png'
              alt='Spin The Wheel'
              width={450}
              height={0}
            />
          </div> */}
        </section>
        {/*---------- SPIN WHEEL END ----------*/}

        {/*---------- TERMS CONDITION START ----------*/}
        {/* <section className='bg-[#092413] pt-36 pb-14 px-4 md:px-16 lg:px-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6'>
            <div className='text-white'>
              <h1 className='text-[40px] capitalize'>Terms & Condition</h1>
              <p className='text-[20px] mb-5'>Lorem ipsum dolor sit amet, Nert adipiscing </p>
              <ul className='text-[20px] leading-10 list-disc ps-5'>
                <li>Transact using Scan and Pay at the cinemas.</li>
                <li>Applicable on min. transaction of INR 400/-</li>
                <li>Maximum cashback up to INR 75/-</li>
              </ul>
            </div>
            <div className='text-white'>
              <h1 className='text-[40px] capitalize'>regular user</h1>
              <p className='text-[20px] mb-5'>Lorem ipsum dolor sit amet, Nert adipiscing </p>
              <ul className='text-[20px] leading-10 list-disc ps-5'>
                <li>Transact using Scan and Pay at the cinemas.</li>
                <li>Applicable on min. transaction of INR 400/-</li>
                <li>Maximum cashback up to INR 75/-</li>
              </ul>
            </div>
          </div>
        </section> */}
        {/*---------- TERMS CONDITION END ----------*/}

        {/*---------- FAQ START ----------*/}
        <section className='pt-14 pb-24 px-4 md:px-16 lg:px-20'>
          <h1 className='text-[#092413] text-[40px] text-center capitalize mb-4'>faq</h1>
          <p className='text-[#092413] text-center w-[75vw] md:w-[500px] mx-auto mb-10'>Lorem ipsum dolor sit amet consectetur. Egestas ornare nisi ut volutpat. Nisl est proin arcu enim facilisis nisl.</p>
          <div className=''>
            <FAQ />
          </div>
        </section>
        {/*---------- FAQ END ----------*/}

      </main>

      <footer className='bg-[#092413] pb-6 px-4 md:px-16 lg:px-20'>
        <div className='relative bottom-20 bg-[#6FD6EF] w-11/12 m-auto rounded-3xl grid grid-cols-8 gap-4 p-8'>
          <div className='col-span-5'>
            <h1 className='text-[#092413] text-[40px] capitalize'>Subscribe To get updated</h1>
            <p className='font-medium'>Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis.</p>
          </div>
          <div className='col-span-3 flex items-center justify-between'>
            <input className='bg-transparent placeholder:text-[#092413] font-medium border-2 border-[#092413] rounded-xl py-3 px-4' name='email' placeholder='Enter Your Email' />
            <button className='bg-[#092413] text-white whitespace-nowrap border-2 border-[#092413] rounded-xl py-3 px-4'>Subscribe Now</button>
          </div>
        </div>
        <div className='grid grid-cols-6 gap-3 md:gap-10'>
          <div className='col-span-2'>
            <Image
              className='mb-3'
              src='/splash-logo.png'
              alt='The Great Escape Water Park Logo'
              width={140}
              height={0}
            />
            <p className='text-white mb-4'>Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis enim cursus vulputate amet. Lobortis mi platea aliquam senectus tempus mauris neque.</p>
            <p className='text-[#EDE82A] text-[20px] font-semibold capitalize'>locate us</p>
            <iframe className='w-full h-[200px] rounded-3xl' src="https://www.google.com/maps/d/u/0/embed?mid=1H5gIEWyFa1oaMbXIZOdOcyez2znqVP_t" title="The Great Escape Water Park"></iframe>
          </div>
          <div>
            <p className='text-[#EDE82A] text-[20px] font-semibold capitalize mb-4'>quick links</p>
            <ul className='text-white leading-10 capitalize font-semibold'>
              <li><Link className='hover:text-[#00c9fc]' href='javascript:void(0);'>home</Link></li>
              <li><Link className='hover:text-[#00c9fc]' href='javascript:void(0);'>Attractions</Link></li>
              <li><Link className='hover:text-[#00c9fc]' href='javascript:void(0);'>Food</Link></li>
              <li><Link className='hover:text-[#00c9fc]' href='javascript:void(0);'>Offers</Link></li>
              <li><Link className='hover:text-[#00c9fc]' href='javascript:void(0);'>Group Bookings</Link></li>
              <li><Link className='hover:text-[#00c9fc]' href='javascript:void(0);'>What's New</Link></li>
              <li><Link className='hover:text-[#00c9fc]' href='javascript:void(0);'>Gallery</Link></li>
            </ul>
          </div>
          <div>
            <p className='text-[#EDE82A] text-[20px] font-semibold capitalize mb-4'>follow us</p>
            <ul className='text-white leading-10 capitalize font-semibold'>
              <li><Link className='flex items-center hover:text-[#00c9fc]' href='javascript:void(0);'><FaFacebook className='me-3' />facebook</Link></li>
              <li><Link className='flex items-center hover:text-[#00c9fc]' href='javascript:void(0);'><FaInstagram className='me-3' />instagram</Link></li>
              <li><Link className='flex items-center hover:text-[#00c9fc]' href='javascript:void(0);'><FaLinkedin className='me-3' />linkedin</Link></li>
              <li><Link className='flex items-center hover:text-[#00c9fc]' href='javascript:void(0);'><FaYoutube className='me-3' />youtube</Link></li>
            </ul>
          </div>
          <div className='col-span-2'>
            <p className='text-[#EDE82A] text-[20px] font-semibold capitalize mb-4'>Booking Partner</p>
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-white rounded-2xl w-full h-16 flex justify-center items-center p-2'>
                <div>
                  <Image
                    className='w-auto h-full'
                    src='/bookmyshow-logo.png'
                    alt='Book My Show Logo'
                    objectFit='contain'
                    width={200}
                    height={0}
                  />
                </div>
              </div>
              <div className='bg-white rounded-2xl w-full h-16 flex justify-center items-center p-2'>
                <div>
                  <Image
                    className='w-auto h-full'
                    src='/bookmyshow-logo.png'
                    alt='Book My Show Logo'
                    objectFit='contain'
                    width={200}
                    height={0}
                  />
                </div>
              </div>
              <div className='bg-white rounded-2xl w-full h-16 flex justify-center items-center p-2'>
                <div>
                  <Image
                    className='w-auto h-full'
                    src='/bookmyshow-logo.png'
                    alt='Book My Show Logo'
                    objectFit='contain'
                    width={200}
                    height={0}
                  />
                </div>
              </div>
              <div className='bg-white rounded-2xl w-full h-16 flex justify-center items-center p-2'>
                <div>
                  <Image
                    className='w-auto h-full'
                    src='/bookmyshow-logo.png'
                    alt='Book My Show Logo'
                    objectFit='contain'
                    width={200}
                    height={0}
                  />
                </div>
              </div>
              <div className='bg-white rounded-2xl w-full h-16 flex justify-center items-center p-2'>
                <div>
                  <Image
                    className='w-auto h-full'
                    src='/bookmyshow-logo.png'
                    alt='Book My Show Logo'
                    objectFit='contain'
                    width={200}
                    height={0}
                  />
                </div>
              </div>
              <div className='bg-white rounded-2xl w-full h-16 flex justify-center items-center p-2'>
                <div>
                  <Image
                    className='w-auto h-full'
                    src='/bookmyshow-logo.png'
                    alt='Book My Show Logo'
                    objectFit='contain'
                    width={200}
                    height={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-6' />
        <div className='grid grid-cols-2 gap-10'>
          <p className='text-white'>@ Copyright 2023</p>
          <p className='text-white text-right'>Inhouse design</p>
        </div>
      </footer>
    </>
  )
}
