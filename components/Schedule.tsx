import Image from "next/image";
import React from "react";
import {
  FiCalendar,
  FiPlayCircle,
  FiPauseCircle,
  FiCheckCircle,
  FiClock,
  FiStopCircle,
  FiPlay,
} from "react-icons/fi";

export default function Schedule({ schedule }: any) {
  function getMonthName(monthNumber: number) {
    const monthNames = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];
    return monthNames[monthNumber - 1];
  }

  function getStatusName(status: string) {
    const statusNames: any = {
      SCHEDULED: { name: "Agendado", icon: <FiCalendar size="20" /> },
      LIVE: { name: "Ao vivo", icon: <FiPlayCircle size="20" /> },
      IN_PLAY: { name: "Em jogo", icon: <FiPlayCircle size="20" /> },
      PAUSED: { name: "Pausado", icon: <FiPauseCircle size="20" /> },
      FINISHED: {
        name: "Finalizado",
        icon: <FiCheckCircle size="20" color="#6ba659" />,
      },
      POSTPONED: { name: "Adiado", icon: <FiClock size="20" /> },
      SUSPENDED: { name: "Suspenso", icon: <FiClock size="20" /> },
      CANCELLED: { name: "Cancelado", icon: <FiStopCircle size="20" /> },
    };
    return (
      statusNames[status] ?? {
        name: "N/A",
        icon: <FiStopCircle size="20" />,
      }
    );
  }

  return (
    <div className="container px-2 p-5 mx-auto overflow-scroll overflow-y-hidden w-max">
      <h2 className="text-lg text-slate-50 font-medium title-font text-left mb-2">
        Campeonato Brasileiro | Rodada {schedule[0].matchday} | Resultados com
        delay
      </h2>
      <div className="flex flex-row -mx-4 -my-8">
        {schedule.map((match: any) => {
          return (
            <div className="py-8 px-4">
              <div className="h-full flex items-start bg-slate-50 p-5 rounded-xl">
                <div className="w-18 flex-shrink-0 flex flex-col text-center leading-none">
                  <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                    {getMonthName(new Date().getMonth())}
                  </span>
                  <span className="font-medium text-lg text-gray-800 title-font leading-none">
                    {new Date(match.utcDate).getDate()}
                  </span>
                </div>
                <div className="flex-grow pl-6 w-80">
                  <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                    SÉRIE A
                  </h2>
                  <div className="flex flex-row items-center mb-3 mt-3">
                    <p className="text-xl mr-3 text-black text-left ">
                      {match?.score.fullTime.home}
                    </p>
                    <p className="text-xl text-black text-left ">
                      {match?.homeTeam.name}
                    </p>
                    <div className="w-5 mr-1 ml-auto">
                      <Image
                        src={match?.homeTeam.crest}
                        width="100"
                        height="100"
                        alt={match?.homeTeam.name}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center">
                    <p className="text-xl mr-3 text-black text-left ">
                      {match?.score.fullTime.away}
                    </p>
                    <p className="text-xl text-black text-left ">
                      {match?.awayTeam.name}
                    </p>
                    <div className="w-5 mr-1 ml-auto">
                      <Image
                        src={match?.awayTeam.crest}
                        width="100"
                        height="100"
                        alt={match?.awayTeam.name}
                      />
                    </div>
                  </div>
                  <div className="items-left flex flex-row mt-5">
                    <div className="w-8 h-8 rounded-full">
                      {getStatusName(match?.status).icon}
                    </div>
                    <span className="">
                      <span className="title-font font-medium text-gray-900">
                        {getStatusName(match?.status).name}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
