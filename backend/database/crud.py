from sqlalchemy.orm import Session


def create(
    db: Session,
    model,
    data: dict
):

    obj = model(
        **data
    )

    db.add(obj)

    db.commit()

    db.refresh(obj)

    return obj


def get_by_id(
    db: Session,
    model,
    record_id: int
):

    return (
        db.query(model)
        .filter(
            model.id == record_id
        )
        .first()
    )


def get_all(
    db: Session,
    model
):

    return (
        db.query(model)
        .all()
    )


def delete(
    db: Session,
    obj
):

    db.delete(obj)

    db.commit()

    return True