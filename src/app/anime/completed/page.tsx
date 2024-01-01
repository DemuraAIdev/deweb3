import CardMini from '../Card'

export async function getServerSideProps() {
  const res = await fetch('/api/animelist/user_list?status=completed')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default function Anime({ data }) {
  return (
    <div>
      <div className=" space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-4xl font-bold  tracking-tight text-gray-900 dark:text-gray-100">
          Completed Watch
        </h1>
      </div>
      {/* Array List */}
      <div className="-m-4 flex flex-wrap">
        {data?.map((item) => (
          <CardMini
            key={item.node.id}
            id={item.node.id}
            title={item.node.title}
            picture={item.node.main_picture}
            score={item.list_status.score}
          />
        ))}
      </div>
    </div>
  )
}
