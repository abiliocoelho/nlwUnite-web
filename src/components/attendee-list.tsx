import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import { attendees } from '../data/seed'
import { IconButton } from './icon-button'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export function AttendeeList() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(attendees.length / 10)

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  function goToFirstPage() {
    setPage(1)
  }

  function goToLastPage() {
    setPage(totalPages)
  }

  function goToPreviousPage() {
    setPage(page - 1)
  }

  function goToNextPage() {
    setPage(page + 1)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="flex px-3 py-2 gap-3 items-center border border-white/10 rounded-lg w-72">
          <Search className="text-emerald-200 size-4" />
          <input
            onChange={onSearchInputChanged}
            type="text"
            className="bg-transparent text-sm flex flex-1 border-none outline-none"
            placeholder="Buscar participante"
          />
        </div>
      </div>
      <div className="border border-white/10 rounded-lg">
        <table className="w-full ">
          <thead>
            <tr className="border-b border-white/10">
              <th
                style={{ width: 48 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              >
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 border border-white/10 rounded checked:text-orange-500 "
                />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Código
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Participante
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data do check-in
              </th>
              <th
                style={{ width: 64 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              ></th>
            </tr>
          </thead>
          <tbody>
            {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
              return (
                <tr
                  className=" border-b border-white/10 hover:bg-white/5"
                  key={attendee.id}
                >
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <input
                      type="checkbox"
                      className="size-4 bg-black/20 border border-white/10 rounded checked:text-orange-500 "
                    />
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    {attendee.id}
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        {attendee.name}
                      </span>
                      <span>{attendee.email}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    {dayjs().to(attendee.createdAt)}
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    {dayjs().to(attendee.checkedInAt)}
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <IconButton transparent>
                      <MoreHorizontal className="size-4" />
                    </IconButton>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="py-3 px-4 text-sm text-zinc-300">
                Mostrando 10 de {attendees.length} itens
              </td>
              <td
                colSpan={3}
                className="py-3 px-4 text-sm text-zinc-300 text-right"
              >
                <div className="flex items-center justify-end gap-8">
                  <span>
                    Página {page} de {totalPages}
                  </span>
                  <div className="flex gap-1.5">
                    <IconButton onClick={goToFirstPage} disabled={page === 1}>
                      <ChevronsLeft className="size-4" />
                    </IconButton>
                    <IconButton
                      onClick={goToPreviousPage}
                      disabled={page === 1}
                    >
                      <ChevronLeft className="size-4" />
                    </IconButton>
                    <IconButton
                      onClick={goToNextPage}
                      disabled={page === totalPages}
                    >
                      <ChevronRight className="size-4" />
                    </IconButton>
                    <IconButton
                      onClick={goToLastPage}
                      disabled={page === totalPages}
                    >
                      <ChevronsRight className="size-4" />
                    </IconButton>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
