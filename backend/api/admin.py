from fastapi import APIRouter, Depends

from core.dependencies import get_current_user
from core.roles import Roles

from services.admin_service import AdminService
from database.database import get_db


router = APIRouter(
    prefix="/admin",
    tags=["Admin"]
)


service = AdminService()


@router.get("/dashboard")
def dashboard(
    db=Depends(get_db),
    user=Depends(get_current_user)
):

    service.check_admin(user)

    return service.dashboard(db)


@router.get("/users")
def users(
    db=Depends(get_db),
    user=Depends(get_current_user)
):

    service.check_admin(user)

    return service.users(db)


@router.get("/incidents")
def incidents(
    db=Depends(get_db),
    user=Depends(get_current_user)
):

    service.check_admin(user)

    return service.incidents(db)


@router.get("/statistics")
def statistics(
    db=Depends(get_db),
    user=Depends(get_current_user)
):

    service.check_admin(user)

    return service.statistics(db)