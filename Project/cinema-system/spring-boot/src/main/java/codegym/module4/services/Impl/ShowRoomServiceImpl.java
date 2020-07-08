package codegym.module4.services.Impl;

import codegym.module4.entities.ShowRoom;
import codegym.module4.repositories.ShowRoomRepo;
import codegym.module4.services.ShowRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ShowRoomServiceImpl implements ShowRoomService
{
    @Autowired
    private ShowRoomRepo showRoomRepo;
    @Override
    public List<ShowRoom> findAll()
    {
        return showRoomRepo.findAll();
    }

    @Override
    public ShowRoom findById(int id)
    {
        return showRoomRepo.findById(id).orElse(null);
    }

    @Override
    public ShowRoom creat(ShowRoom showRoom) {
        return showRoomRepo.save(showRoom);
    }
}
