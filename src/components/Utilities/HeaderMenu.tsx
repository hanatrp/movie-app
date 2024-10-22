
interface Props {
  title : string
}

const HeaderMenu: React.FC<Props> = ({title}) => {
  return (
    <div>
      <div className="flex justify-center py-9 font-bold md:text-3xl text-light text-xl">
        <h3 className="text-light">{title}</h3>
      </div>
    </div>
  )
}

export default HeaderMenu