import Image from 'next/image';
import GitHubIcon from "@/components/icons/GithubIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import BuildIcon from "@/components/icons/BuildIcon";
import { User } from '@/interfaces/users';

interface Props {
    user: User;
}

function valideURL(url: string) {
    // Verificar si la URL comienza con "http://" o "https://"
    if (!/^https?:\/\//i.test(url)) {
      // Agregar "https://" al principio de la URL
      url = "https://" + url;
    }
    return url;
  }

const UserCardInfo = ({user}:Props) => {
  return (
    <article className='grid-areas rounded-xl bg-blue-900 p-4 text-white'>
        <div className='overflow-hidden section-logo grid h-24 w-24 place-content-center rounded-full bg-gray-200 p-1 lg:mx-auto'>
            {/* <GitHubIcon className='relative top-2 h-full w-full'/> */}
            <Image 
                src={user.avatar_url}
                width={96}
                height={96}
                className='rounded-full'
                alt={`imagen de perfil de ${user.avatar_url}`}
            />
        </div>
        <div className='section-title'>
            <h2 className='font-bold text-3xl'>{user.name}</h2>
            <p>@{user.login}</p>
        </div>
        <p className='section-date lg:text-right'>
            {new Date(user.created_at || "").toLocaleDateString("es", {
                year: "numeric",
                month: "long",
                day: "numeric"
            })}
        </p>
        <p className='section-description mt-8 leading-loose'>
            {user.bio || "Sin user bio."}
        </p>
        <div className='section-number mt-4 flex justify-around bg-blue-950 p-8 rounded-xl text-center'>
            <article>
                <p>Repos</p>
                <p className='text-xl font-bold'>{user.public_repos}</p>
            </article>
            <article>
                <p>Followers</p>
                <p className='text-xl font-bold'>{user.followers}</p>
            </article>
            <article>
                <p>Following</p>
                <p className='text-xl font-bold'>{user.following}</p>
            </article>
        </div>
        <div className='section-social md:grid md:grid-cols-2 mt-4 space-y-3'>
            <article className='flex space-x-2'>
                <i><LocationIcon className='fill-white w-full h-full' width={"1rem"}/></i>
               <span>{user.location}</span>
            </article>
            <article  className='flex space-x-2'>
                <i><LinkIcon className='fill-white w-full h-full' width={"1rem"}/></i>
               <a className='truncate' href={valideURL(user?.blog)}>{user?.blog || "Sin información"}</a>
            </article>
            <article  className='flex space-x-2'>
                <i><TwitterIcon className='fill-white w-full h-full' width={"1rem"}/></i>
               <a href={`https://www.x.com/${user?.twitter_username}`}>{user?.twitter_username}</a>
            </article>
            <article  className='flex space-x-2'>
                <i><BuildIcon className='fill-white w-full h-full' width={"1rem"}/></i>
                <span>{user?.company || "No compañía"}</span>
            </article>
        </div>
    </article>
  )
}

export default UserCardInfo;