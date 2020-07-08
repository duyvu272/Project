package codegym.module4.services.Impl;

import codegym.module4.entities.ShowTime;
import codegym.module4.repositories.ShowTimeRepo;
import codegym.module4.services.ShowTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ShowTimeServiceImpl implements ShowTimeService
{
    @Autowired
    private ShowTimeRepo showTimeRepo;
    @Override
    public List<ShowTime> findAll()
    {
        return showTimeRepo.findAll();
    }
}
