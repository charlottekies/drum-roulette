import { Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { Musician } from "@/interfaces/musician";
import { Instrument } from "@/interfaces/instrument";
import { Assignment } from "@/interfaces/assignment";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "0 5em",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5%",
    marginLeft: "2%",
  },
  image: {
    width: 200,
    height: 200,
    overflow: "hidden",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Assignments() {
  const classes = useStyles();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const router = useRouter();
  const { musicians, instruments } = router.query;
  const parsedMusicians = musicians ? JSON.parse(musicians as string) : [];
  const parsedInstruments = instruments
    ? JSON.parse(instruments as string)
    : [];
  const assign = (musicians: Musician[], instruments: Instrument[]) => {
    const shuffledMusicians = shuffle(musicians);
    const shuffledInstruments = shuffle(instruments);
    const nextAssignment = shuffledMusicians.map((musician, i) => {
      return { musician: musician, instrument: shuffledInstruments[i], id: i };
    });
    setAssignments(nextAssignment);
  };

  useEffect(() => {
    assign(parsedMusicians, parsedInstruments);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.preventDefault();

            router.push({
              pathname: "/selection",
            });
          }}
          type={"button"}
        >
          Return to Selection Page
        </Button>
      </div>
      {assignments.map((assignment) => {
        return (
          <div
            key={assignment.musician.user_id}
            className={classNames(classes.container)}
          >
            <div className={classNames(classes.card)}>
              <div className={classNames(classes.image)}>
                <Image
                  priority={true}
                  src={assignment.musician.image}
                  alt={`assigned musician is ${assignment.musician.first_name}`}
                  width={200}
                  height={280}
                />
              </div>
              <Typography>{assignment.musician.first_name}</Typography>
            </div>
            <div className={classNames(classes.card)}>
              <div className={classNames(classes.image)}>
                <Image
                  src={assignment.instrument.img}
                  alt={`assigned instrument is ${assignment.instrument.name}`}
                  width={200}
                  height={200}
                />
              </div>
              <Typography>{assignment.instrument.name}</Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
}
