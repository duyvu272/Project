package codegym.module4.services;

import codegym.module4.entities.ShowRoom;

import java.util.List;

public interface ShowRoomService
{
    List<ShowRoom> findAll();
    ShowRoom findById(int id);
    ShowRoom creat(ShowRoom showRoom);
}
